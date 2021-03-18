import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title
            title="Projects"
            subTitle="Showcase of my latest work, projects and developments"
          />
          {projects.map((project) => {
            const { title, info, info2, url, repo, imgs, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p className="tech">
                          {info || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                        </p>
                        <p className="mb-4 taj">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <Carousel>
                            {imgs &&
                              imgs.map((imgObj) => {
                                const { imgId, caption, img, interval } = imgObj;
                                return (
                                  <Carousel.Item key={imgId} interval={interval}>
                                    <ProjectImg alt={caption} filename={img} />
                                    {caption && (
                                      <Carousel.Caption className="carousal-caption">
                                        <p>{caption}</p>
                                      </Carousel.Caption>
                                    )}
                                  </Carousel.Item>
                                );
                              })}
                          </Carousel>
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
