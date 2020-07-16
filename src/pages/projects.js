import React from 'react';

import SEO from '../components/seo';
import ProjectTable from '../components/project-table';
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
  margin: 2rem auto 1rem auto;

  @media (max-width: 1000px) {
    margin: 4rem auto 1rem auto;
  }
  @media (max-width: 700px) {
    margin: 3rem auto 1rem auto;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 2rem auto 2rem auto;
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

const Button = styled.p`
  border-bottom: 1px solid white;
  text-align: right;
  margin: 0;
`;

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes.filter(
    (node) => node.fileAbsolutePath.includes('projects') == true
  );

  const portfolios = projects.filter(
    ({ frontmatter }) => frontmatter.workField === 'Portfolio'
  );

  const blogs = projects.filter(
    ({ frontmatter }) => frontmatter.workField === 'Blog'
  );

  const business = projects.filter(
    ({ frontmatter }) => frontmatter.workField === 'Business'
  );

  // const archivedPosts = data.allMarkdownRemark.nodes.filter(
  //   (node) => node.fileAbsolutePath.includes('archive') == true
  // );

  const item = (id, title, subTitle, cover, path) => (
    <Wrapper key={id} href={path} target="_blank" rel="noopener noreferrer">
      <Image>
        <Img fluid={cover} alt={title} />
      </Image>
      <StyledLink>
        <Info>
          <Title>{`${title} | ${subTitle}`}</Title>
          {/* <Button>Read more</Button> */}
        </Info>
      </StyledLink>
    </Wrapper>
  );

  return (
    <>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>Recent Projects</h1>
        <h2>Porfolios</h2>
        <ProjectWrapper>
          {portfolios.map(({ id, frontmatter }) => {
            const { title, subTitle, cover, linkToProject } = frontmatter;
            return item(
              id,
              title,
              subTitle,
              cover.childImageSharp.fluid,
              linkToProject
            );
          })}
        </ProjectWrapper>

        <h2>Businesses</h2>
        <ProjectWrapper>
          {business.map(({ id, frontmatter }) => {
            const { title, subTitle, cover, linkToProject } = frontmatter;
            return item(
              id,
              title,
              subTitle,
              cover.childImageSharp.fluid,
              linkToProject
            );
          })}
        </ProjectWrapper>

        <h2>Blogs</h2>
        <ProjectWrapper>
          {blogs.map(({ id, frontmatter }) => {
            const { title, subTitle, cover, linkToProject } = frontmatter;
            return item(
              id,
              title,
              subTitle,
              cover.childImageSharp.fluid,
              linkToProject
            );
          })}
        </ProjectWrapper>
        {/* <h2>Archive</h2>
        <ProjectTable posts={archivedPosts} /> */}
      </Container>
    </>
  );
};

export default ProjectsPage;

export const data = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { draft: { eq: false } }
      }
    ) {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          subTitle
          workField
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
