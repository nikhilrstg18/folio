import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const borderBottomStyle = {
  borderWidth: '3px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(to bottom, #7F00FF, rgba(0, 0, 0, 0)) 1 100%',
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { cta } = skills;

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
        <div className="project-wrapper mb-4">
          <Title title="Skills" subTitle="There is always scope for more but I'm good at" />
          <Row className="mb-0">
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
                        {items.map((item, index) => {
                          const { itemId, altName, percent, iconClass, color, logo } = item;
                          let label = '';
                          switch (true) {
                            case percent >= 40 && percent < 55:
                              label = 'Intermediate';
                              break;
                            case percent >= 55 && percent < 85:
                              label = 'Advance';
                              break;
                            case percent >= 85 && percent <= 100:
                              label = 'Expert';
                              break;
                            default:
                              label = 'Beginner';
                              break;
                          }
                          return (
                            <Fade
                              key={itemId}
                              left={isDesktop}
                              bottom={isMobile}
                              duration={1000}
                              delay={500 + index * 100}
                              distance="30px"
                            >
                              <div className="pt-2 pr-4 pl-4">
                                <Row className="mb-0 pl-2 pr-2">
                                  <Col lg={2} md={2} sm={2}>
                                    {iconClass ? (
                                      <span title={altName}>
                                        <i
                                          className={`icon ${iconClass}`}
                                          style={{ color, fontSize: '3rem' }}
                                        />
                                      </span>
                                    ) : (
                                      <StaticQuery
                                        query={graphql`
                                          query {
                                            images: allFile {
                                              edges {
                                                node {
                                                  relativePath
                                                  name
                                                  childImageSharp {
                                                    fixed(width: 64) {
                                                      ...GatsbyImageSharpFixed
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        `}
                                        render={(data) => {
                                          const image = data.images.edges.find((n) =>
                                            n.node.relativePath.includes(logo)
                                          );

                                          if (!image) return null;

                                          const imageFixed = image.node.childImageSharp.fixed;
                                          return (
                                            <Img
                                              title={altName}
                                              style={{ width: '3rem', height: '3rem' }}
                                              alt={altName}
                                              fixed={imageFixed}
                                            />
                                          );
                                        }}
                                      />
                                    )}
                                  </Col>
                                  <Col lg={10} md={10} sm={10} className="progress-div">
                                    <ProgressBar
                                      animated
                                      now={percent}
                                      label={label}
                                      variant="folio"
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </Fade>
                          );
                        })}
                      </div>
                    </Fade>
                  </Col>
                );
              })}
          </Row>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-cta">
            <Link to="education" smooth duration={1000}>
              <span className="cta-btn cta-btn--hero">{cta || 'Work Experience & Education'}</span>
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
