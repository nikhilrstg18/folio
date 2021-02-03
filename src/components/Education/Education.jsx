import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Chrono } from 'react-chrono';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { education } = useContext(PortfolioContext);
  const { cta } = education;

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
    <section id="education">
      <Container>
        <Title title="Education" />
        <Row className="education-wrapper">
          <Col lg={12} md={12} sm={12}>
            <div
              style={{
                width: '100%',
                height: '70vh',
                marginBottom: '1rem',
              }}
            >
              <Chrono
                items={education}
                mode="VERTICAL_ALTERNATING"
                theme={{
                  primary: '#7F00FF',
                  secondary: ' #fff',
                  cardForeColor: '#333',
                }}
              />
            </div>
          </Col>
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <Link to="projects" smooth duration={1000}>
              <span className="cta-btn cta-btn--resume">{cta || 'Projects'}</span>
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Education;
