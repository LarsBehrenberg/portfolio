import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const Content = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  /* min-height: 78vh; */
  padding: 0.5rem 1.0875rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const SideInfo = styled.div`
  width: 700px;
  height: 530px;
  position: sticky;
  top: 150px;
  margin-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .image {
    max-height: 350px;
    width: 100%;

    border-radius: 0.4em;
    img {
      border-radius: 0.4em;
    }
  }

  .info {
    height: 100px;
    display: flex;
    padding: 0 2rem;
    width: 100%;

    justify-content: space-between;
    div {
      border-radius: 4px;

      padding: 0.5rem 0;

      flex-basis: calc(50% - 1rem);
      max-width: calc(50% - 1rem);
      width: calc(50% - 1rem);

      background: rgba(0, 0, 0, 0.2) 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 30px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    height: auto;
    top: 0;

    .image,
    .info {
      max-width: 700px;
    }

    .info {
      margin: 3rem 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
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
        <SideInfo>
          <div className="image">
            <Img
              fluid={project.frontmatter.cover.childImageSharp.fluid}
              alt={`${project.frontmatter.title} Cover`}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="info">
            <div>
              <h3 style={{ marginBottom: '0.6em' }}>Customer</h3>
              <p>{project.frontmatter.title}</p>
            </div>
            <div>
              <h3>Features</h3>
            </div>
          </div>
        </SideInfo>
        <Wrapper>
          <HeaderContainer>
            <MarkedHeader>{`${project.frontmatter.title} - ${project.frontmatter.subTitle}`}</MarkedHeader>
          </HeaderContainer>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: project.html }} />
        </Wrapper>
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
        subTitle
        cover {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
