import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage} from 'gatsby-plugin-image';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  layout: FIXED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;
      
      return <GatsbyImage
        className="rounded shadow-lg"
        image={image.node.childImageSharp.gatsbyImageData}/>;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
