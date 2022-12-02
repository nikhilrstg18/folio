import React from 'react';
import { StaticQuery, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage} from 'gatsby-plugin-image';

const AboutImg = ({ filename, alt }) => { 
const data = useStaticQuery(graphql`
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
    }`);
  
    const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

    if (!image) return null;
    
    return <GatsbyImage
      className="rounded shadow-lg"
      image={image.node.childImageSharp.gatsbyImageData}
      alt={image.node.name}/>;
}

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
