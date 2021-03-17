import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

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
        <Title title="Work experience & Education" subTitle="Journey so far" />
        <VerticalTimeline className="mb-4">
          {education.length &&
            education.map((item) => {
              const { id, startDate, endDate, title, org, titleDesc, icon, bgColor } = item;
              return (
                <VerticalTimelineElement
                  key={id}
                  className={`vertical-timeline-element--${icon}`}
                  contentStyle={{ color: '#333' }}
                  contentArrowStyle={{ borderRight: '7px solid #fFF' }}
                  date={`${startDate} - ${endDate}`}
                  iconStyle={{ background: bgColor, color: '#fff' }}
                  icon={icon === 'work' ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">{title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{org}</h4>
                  <p>{titleDesc}</p>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
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
