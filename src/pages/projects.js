import React from 'react';

import SEO from '../components/seo';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 4rem 1rem 4rem;

  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 3rem 1rem 1rem 1rem;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 2rem auto 1rem auto;
  }
`;

const Wrapper = styled.a`
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  border-radius: 0.4rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 15rem;

  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  flex-basis: calc(99.9% * 1 / 2 - 2.5rem);
  max-width: calc(99.9% * 1 / 2 - 2.5rem);
  width: calc(99.9% * 1 / 2 - 2.5rem);

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 18rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 15rem;
  }

  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 3;
  border-radius: 0.4rem;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* 
    ORIGINAL 
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    ); */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: -10;
    border-radius: 0.4rem;
    transition: opacity 0.4s;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
    opacity: 0.8;
  }
  > div {
    position: static !important;
    opacity: 0.8;
  }
  > div > div {
    position: static !important;
    opacity: 0.8;
  }
`;

const Info = styled.div`
  color: #f0f0f0;
  margin: 0 1.25rem 0.75rem 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & span:last-child {
    display: none;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.6rem;
  margin-top: 0.4rem;
`;

const Button = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid white;
  text-align: right;
`;

const ProjectsPage = ({ data }) => {
  const recentPosts = data.allMarkdownRemark.nodes;
  return (
    <>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>Recent Projects</h1>
        <ProjectWrapper>
          {recentPosts.map(({ id, frontmatter }) => {
            const { title, cover, path, linkToProject } = frontmatter;
            return (
              <Wrapper
                key={id}
                href={linkToProject}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image to={path}>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Image>
                <StyledLink>
                  <Info>
                    <Title>{title}</Title>
                    {path !== '' ? <Button to={path}>Read more</Button> : null}
                  </Info>
                </StyledLink>
              </Wrapper>
            );
          })}
        </ProjectWrapper>

        {/*<h2 style={{ textAlign: 'right' }}>Recent Applications</h2>
        <ProjectWrapper>
          {data.allFile.nodes.map(({ id, childImageSharp }) => (
            <Wrapper>
              <Image key={id}>
                <Img fluid={childImageSharp.fluid} alt="something" />
              </Image>
              <Info>
                <h3>Alex Kerr</h3>
                <ButtonContainer>
                  <Button>Live</Button>
                  <Button>Code base</Button>
                </ButtonContainer>
              </Info>
            </Wrapper>
          ))}
        </ProjectWrapper> */}
      </Container>
    </>
  );
};

export default ProjectsPage;

export const data = graphql`
  query Images {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { draft: { eq: false } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          path
          linkToProject
          linkToCode
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
  }
`;

{
  /* <p>
            <strong>Websites I have recently built:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://tfbs.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                t.f.b.s - Telgte
              </a>{' '}
              | A small consulting company based in Telgte, Germany
            </li>
            <li>
              <a
                href="https://alexkerr.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alex Kerr
              </a>{' '}
              | A personal/business website of a Japanologist and Author
            </li>
            <li>
              <a
                href="https://chihirohori.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chihiro Hori
              </a>{' '}
              | A business website of a Nutritionist based in Japan
            </li>
          </ul>
          <br />
          <p>
            <strong>Applications I have recently built:</strong>
          </p>
          <ul>
            <li>
              <Link to="/projects/choropleth-map">D3.js: Choropleth Map</Link>{' '}
              | Percentage of adults age 25 and older with a bachelor's degree
              or higher in the USA (2010-2014)
            </li>
            <li>
              <a
                href="https://codepen.io/lars281/full/MWgZwXQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                D3.js: Treemap Diagram
              </a>{' '}
              | Top 100 Most Sold Video Games Grouped by Platform
            </li>
             <li><a href="https://codepen.io/lars281/full/JjPeMyO" target="_blank" rel="noopener noreferrer">D3.js: Choropleth Map</a> | Percentage of adults age 25 and older with a bachelor's degree or higher in the USA (2010-2014)</li> 
            <li>
              <a
                href="https://codepen.io/lars281/full/yLBjZzL"
                target="_blank"
                rel="noopener noreferrer"
              >
                D3.js: Heat Map
              </a>
              | Monthly Global Land-Surface Temperature (1753 - 2015)
            </li>
          </ul> */
}
