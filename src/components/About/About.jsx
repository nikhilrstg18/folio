import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

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
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I&apos;m a
                  <ul>
                    <li>
                      <a href="https://dotnet.microsoft.com/apps/aspnet">
                        <strong>Web Developer </strong>
                      </a>
                      ( Web Apps | APIs | <strong>&micro;</strong>-services )
                    </li>
                    <li>
                      <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-02&ci=AWS01115186">
                        <strong>Certified AWS Solutions Architect - Associate&reg;</strong>
                      </a>
                    </li>
                    <li>
                      <a href="http://badgecert.com/bc/html/profile.jsp?k=pwywzgg">
                        <strong>Certified Scrum Master&reg;</strong>
                      </a>
                    </li>
                  </ul>
                  living in New Delhi and moving around <strong>NCR, India</strong>.
                </p>
                <p className="about-wrapper__info-text">
                  I&apos;m passionate about web development and design in all its forms and helping{' '}
                  <strong>mid and large businesses</strong> and artisans build and improve their
                  online presence, digital accessibility.
                </p>
                <p className="about-wrapper__info-text">
                  I spend my workdays with my hands in many different areas of web development in
                  <ul>
                    <li>
                      back-end ( <strong>C# .Net</strong> | <strong>ASP.NET Core</strong> )
                    </li>
                    <li>
                      front-end ( <strong>HTML</strong> | <strong>CSS</strong> | <strong>JS</strong>{' '}
                      | <strong>Angular</strong> | <strong>ReactJS</strong> )
                    </li>
                    <li>
                      cloud ( <strong>AWS</strong> | <strong>Azure</strong> )
                    </li>
                  </ul>
                </p>
                <p className="about-wrapper__info-text">
                  Currently, I work with{' '}
                  <a href="https://cygrp.com/">
                    <strong>Cyber Group</strong>
                  </a>
                  . I&apos;m not looking for any full-time position as of now but I&apos;m{'  '}
                  <strong>always open to ideas and projects</strong> that excite me.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
