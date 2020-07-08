import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import UsedTechnologies from '../components/used-technologies';

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
  height: 600px;
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
    box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 30px;
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

    h3 {
      margin-bottom: 0.6em;
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

const TechContainer = styled.p`
  display: flex;
  & > * {
    margin: 0 0.5em 0 0;
    display: inline;
  }
`;

export default ({ data }) => {
  const project = data.markdownRemark;
  const {
    title,
    subTitle,
    linkToProject,
    cover,
    technologies,
  } = project.frontmatter;

  return (
    <>
      <SEO
        title={title}
        description={project.frontmatter.description || project.excerpt}
      />
      <Content>
        <SideInfo>
          <a
            className="image"
            href={linkToProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={cover.childImageSharp.fluid}
              alt={`${title} Cover`}
              style={{ objectFit: 'contain' }}
            />
          </a>
          <div className="info">
            <div>
              <h3>Customer</h3>
              <p>{title}</p>
            </div>
            <div>
              <h3>Technologies used</h3>
              <TechContainer>
                <UsedTechnologies tech={technologies} />
              </TechContainer>
            </div>
          </div>
        </SideInfo>
        <Wrapper>
          <HeaderContainer>
            <MarkedHeader>{`${title} - ${subTitle}`}</MarkedHeader>
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
        linkToProject
        technologies
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
