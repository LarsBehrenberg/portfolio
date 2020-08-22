import React from 'react';
import styled from '@emotion/styled';
import { Skills } from 'components';
import { SEO } from 'layout';
import { graphql, Link } from 'gatsby';

const Container = styled.div`
  max-width: 600px;
  margin-bottom: -3rem;
`;

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`;

const Subtitle = styled.p`
  margin-bottom: 0.3rem;
  margin-left: 5px;
  font-size: 1.4rem;
  border-left: 2px solid white;
  padding-left: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  gap: 1rem;

  a {
    border: 2px solid #fff;
    padding: 0.3rem 1rem;
    background: none;
    color: #fff;
    text-decoration: none;
  }
`;

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Latest Work" keywords={[`gatsby`, `application`, `react`]} />

    <Container>
      <Subtitle>Your Bespoke Website</Subtitle>
      <NameHeader>Latest Work</NameHeader>
      <p>
        Your website is the digital brochure and a potential storefront of your
        business. I create bespoke Fullstack websites from the front-end designs
        to the outstanding backend capabilities which become fully customisable
        for any ability of the user.
      </p>
      <ButtonContainer>
        <a href="/latest-work#works">See Works</a>
        <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
          Get In Touch
        </a>
      </ButtonContainer>
    </Container>
    <Skills skills={data.works.nodes} id="works" />
  </div>
);

export default IndexPage;

export const data = graphql`
  query {
    works: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/works/" } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 400, format: HTML)
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
