import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const borderBottomStyle = {
  borderWidth: '3px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(to bottom, #7F00FF, rgba(0, 0, 0, 0)) 1 100%',
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.length &&
              skills.map((skill) => {
                const { id, name, items } = skill;
                return (
                  <Col lg={4} md={6} sm={12} key={id} className="mt-4 mb-4">
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div>
                        <h2 className="pb-4" style={borderBottomStyle}>
                          {name}
                        </h2>
                        {items.map((item) => {
                          const { itemId, altName, percent, iconClass, color, logo } = item;
                          let label = '';
                          switch (true) {
                            case percent >= 50 && percent < 75:
                              label = 'Intermediate';
                              break;
                            case percent >= 75 && percent < 90:
                              label = 'Advance';
                              break;
                            case percent >= 90 && percent <= 100:
                              label = 'Expert';
                              break;
                            default:
                              label = 'Beginner';
                              break;
                          }
                          return (
                            <div key={itemId} className="p-4">
                              <Row className="mb-2 p-2">
                                <Col lg={2} md={2} sm={2}>
                                  {iconClass ? (
                                    <span>
                                      <i
                                        className={iconClass}
                                        style={{ color, fontSize: '2.5rem' }}
                                      />
                                    </span>
                                  ) : (
                                    <img src={logo} alt={altName} style={{ width: '2.5rem' }} />
                                  )}
                                </Col>
                                <Col lg={10} md={10} sm={10}>
                                  <ProgressBar
                                    animated
                                    now={percent}
                                    label={label}
                                    variant="folio"
                                  />
                                </Col>
                              </Row>
                            </div>
                          );
                        })}
                      </div>
                    </Fade>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
