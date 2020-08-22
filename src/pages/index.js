import React from 'react';

import { GoNextButton, LandingBio, Skills } from 'components';
import { SEO } from 'layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <GoNextButton />
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
  }
`;
