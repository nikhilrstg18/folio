import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { title, subTitle, img, cta, positions, city, cityAround, quickSkills, currentOrg } = about;

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
                    {positions &&
                      positions.map((position, index) => {
                        const { id, name, positionLink, positionAbout } = position;
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
                                <a href={positionLink}>
                                  <strong>{name} </strong>
                                </a>
                                {positionAbout && <span>({positionAbout})</span>}
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
                        quickSkills.skills.map((skill) => {
                          const { id, group, groupAbout } = skill;
                          return (
                            <li key={id}>
                              <p>
                                {group} {groupAbout && <strong>({groupAbout})</strong>}
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
                    <Link to="skills" smooth={true} duration={1000}>
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
