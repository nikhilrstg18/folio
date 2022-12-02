import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Hero from '../../images/hero.mp4';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <video autoPlay loop muted className="hero-video">
          <source src={Hero} type="video/mp4" />
        </video>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <p>{subtitle || "I'm the Unknown Developer."}</p>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <Link to="about" smooth={false} duration={1000}>
              <span className="cta-btn cta-btn--folio">{cta || 'About Me'}</span>
            </Link>
            <a href="https://nikhilrstg18.github.io/blogger/" target="_blank" rel="noreferrer" className='mx-4'>
              <span className="cta-btn cta-btn--folio">{'My Blogs'}</span>
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
