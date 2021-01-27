import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
                  I'm a <strong>Full Stack Developer</strong>,{' '}
                  <a href="http://badgecert.com/bc/html/profile.jsp?k=pwywzgg">
                    <strong>Certified Scrum Master&reg;</strong>
                  </a>{' '}
                  and a{' '}
                  <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-02&ci=AWS01115186">
                    <strong>Certified AWS Solutions Architect - Associate&reg;</strong>
                  </a>{' '}
                  living in New Delhi and moving around <strong>NCR, India</strong>.
                </p>
                <p className="about-wrapper__info-text">
                  I’m extremely passionate about web development and design in all it’s forms and
                  helping <strong>mid and large businesses</strong> and artisans build and improve
                  their online presence. I spend my work days with my hands in many different areas
                  of web development from back end programming (<strong>AWS</strong>,{' '}
                  <strong>C# .Net</strong>, <strong>ASP.NET Core</strong>) to front-end engineering
                  (<strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootsrap</strong>,{' '}
                  <strong>Javascript</strong>, <strong>Angular</strong> and <strong>ReactJS</strong>
                  ), digital accessibility, user experience and visual design.
                </p>
                <p className="about-wrapper__info-text">
                  Currently I work with{' '}
                  <a href="https://cygrp.com/">
                    <strong>Cyber Group</strong>
                  </a>
                  . I am not looking for any full time position as of now but I am{' '}
                  <strong>always open to ideas and projects</strong> that excite me. Aside from web
                  development,I enjoy spending my time exploring new places and clicking photos.
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
