import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, cta } = about;

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
        <Title title="About Me" subTitle="Recreating best of myself" />
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
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={600}
                      distance="30px"
                    >
                      <li>
                        <p>
                          <a href="https://dotnet.microsoft.com/apps/aspnet">
                            <strong>Web Developer </strong>
                          </a>
                          ( Web Apps | APIs | <strong>&micro;</strong>-services )
                        </p>
                      </li>
                    </Fade>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={700}
                      distance="30px"
                    >
                      <li>
                        <p>
                          <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-02&ci=AWS01115186">
                            <strong>Certified AWS Solutions Architect - Associate&reg;</strong>
                          </a>
                        </p>
                      </li>
                    </Fade>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={800}
                      distance="30px"
                    >
                      <li>
                        <p>
                          <a href="http://badgecert.com/bc/html/profile.jsp?k=pwywzgg">
                            <strong>Certified Scrum Master&reg;</strong>
                          </a>
                        </p>
                      </li>
                    </Fade>
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
                      living in New Delhi and moving around <strong>NCR, India</strong>.
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
                    <p>
                      I&apos;m passionate about web development and spend workdays with my hands in
                      below areas of web development
                    </p>
                    <ul>
                      <li>
                        <p>
                          back-end ( <strong>C# .Net</strong> | <strong>ASP.NET Core</strong> )
                        </p>
                      </li>
                      <li>
                        <p>
                          front-end ( <strong>HTML</strong> | <strong>CSS</strong> |{' '}
                          <strong>JS</strong> | <strong>Angular</strong> | <strong>ReactJS</strong>{' '}
                          )
                        </p>
                      </li>
                      <li>
                        <p>
                          cloud ( <strong>AWS</strong> | <strong>Azure</strong> )
                        </p>
                      </li>
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
                    <a href="https://cygrp.com/">
                      <strong>Cyber Group</strong>
                    </a>
                    . I&apos;m not looking for any full-time position as of now but I&apos;m{'  '}
                    <strong>always open to ideas and projects</strong> that excite me.
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
                      <span className="cta-btn cta-btn--resume">{cta || 'Skills'}</span>
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
