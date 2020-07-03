import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    #d3d3d315,
    #d3d3d380 100%,
    #d3d3d325
  );
`;

const HeaderDate = styled.h3`
  color: #d3d3d380;
  text-align: right;
  display: inline;
`;

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  margin-top: 1.45rem;
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(#d3d3d380, #d3d3d330);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`;

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <Content>
        <HeaderContainer>
          <MarkedHeader>{project.frontmatter.title}</MarkedHeader>
          <HeaderDate>{project.frontmatter.date}</HeaderDate>
        </HeaderContainer>

        <Img
          fluid={project.frontmatter.cover.childImageSharp.fluid}
          alt={`${project.frontmatter.title} Cover`}
        />
        <MarkdownContent dangerouslySetInnerHTML={{ __html: project.html }} />
      </Content>
    </>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        cover {
          childImageSharp {
            fluid(quality: 100, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
