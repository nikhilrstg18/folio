import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { title, subTitle, img, cta, titles, city, cityAround, quickSkills, currentOrg } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        {title && subTitle && <Title title={title} subTitle={subTitle} />}
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="about-wrapper__info">
                <div className="about-wrapper__info-text">
                  <p>I&apos;m a</p>
                  <ul>
                    {titles &&
                      titles.map((t, index) => {
                        const { id, name = title, titleLink, titleAbout } = t;
                        return (
                          <Fade
                            key={id}
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={600 + index * 100}
                            distance="30px"
                          >
                            <li>
                              <p>
                                <a href={titleLink}>
                                  <strong>{name} </strong>
                                </a>
                                {titleAbout && <span>({titleAbout})</span>}
                              </p>
                            </li>
                          </Fade>
                        );
                      })}
                  </ul>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={900}
                    distance="30px"
                  >
                    <p>
                      {' '}
                      living in <strong>{city}</strong> and moving around{' '}
                      <strong>{cityAround}</strong>.
                    </p>
                  </Fade>
                </div>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="about-wrapper__info-text">
                    <p>{quickSkills && quickSkills?.para}</p>
                    <ul>
                      {quickSkills &&
                        quickSkills.skills &&
                        quickSkills.skills.map((s) => {
                          const { id, skillName = title, titleAbout } = s;
                          return (
                            <li key={id}>
                              <p>
                                {skillName} {titleAbout && <strong>({titleAbout})</strong>}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </Fade>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1100}
                  distance="30px"
                >
                  <p className="about-wrapper__info-text">
                    Currently, I work with{' '}
                    <a href={currentOrg?.link}>
                      <strong>{currentOrg?.name}</strong>
                    </a>
                    . {currentOrg?.paraOne && <span>{currentOrg?.paraOne}</span>}.{' '}
                    {currentOrg?.paraTwo && <strong>{currentOrg?.paraTwo}</strong>}
                  </p>
                </Fade>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1200}
                  distance="30px"
                >
                  <p className="hero-cta">
                    <Link to="skills" smooth duration={1000}>
                      <span className="cta-btn cta-btn--folio-inverse">{cta || 'next'}</span>
                    </Link>
                  </p>
                </Fade>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
