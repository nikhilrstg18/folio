import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, subTitle }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
    {subTitle && (
      <h4 className="section-subtitle">
        <span>
          <i className="fas fa-quote-left" />
        </span>{' '}
        {subTitle.toLowerCase()}{' '}
        <span>
          <i className="fas fa-quote-right" />
        </span>
      </h4>
    )}
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Title;
