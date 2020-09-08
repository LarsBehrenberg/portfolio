import React from 'react';

import { GoNextButton, LandingBio, Skills, Testimonials } from 'components';
import { SEO } from 'layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <GoNextButton />
    <Testimonials testimonial={data.testimonial} />
    <Skills skills={data.skills.nodes} />
  </div>
);

export default IndexPage;

export const data = graphql`
  query {
    skills: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/index/skills/" } }
      sort: { fields: frontmatter___index, order: ASC }
    ) {
      nodes {
        id
        html
        frontmatter {
          title
          cover {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    testimonial: markdownRemark(
      fileAbsolutePath: { regex: "/index/testimonial.md/" }
    ) {
      html
      frontmatter {
        title
        subtitle
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
