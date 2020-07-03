import React from 'react';

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import styled from '@emotion/styled';

import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXing } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
`;

const Image = styled.div`
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  float: right;
  margin: 0rem 0 0.5rem 1rem;

  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
  }
  @media (max-width: 570px) {
    float: none;
    width: 300px;
    margin: 0 auto 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-bottom: 1.45rem;
  }

  div {
    display: flex;
    flex-direction: row;
    & a {
      margin-left: 1em;
    }
  }
`;

const AboutPage = ({ data }) => (
  <div>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Header>
        <h1>About Me</h1>
        <div>
          <IconContext.Provider value={{ color: '#ffffff90', size: '1.7em' }}>
            <a
              href="https://www.linkedin.com/in/lars-behrenberg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.xing.com/profile/Lars_Behrenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXing />
            </a>
            <a
              href="https://github.com/LarsBehrenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <Link to="/contact">
              <AiOutlineMail />
            </Link>
          </IconContext.Provider>
        </div>
      </Header>
      <Image>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt=""
          style={{ width: '300px', objectFit: 'cover' }}
        />
      </Image>
      <p>
        <strong>Lars Behrenberg - Web Developer</strong>
      </p>

      <p>
        I currently pursue cultural studies in{' '}
        <a
          href="https://www.google.com/maps/place/Kyoto,+Japan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kyoto, Japan
        </a>
        . I build websites and applications using React, Gatsby, NodeJS,
        ExpressJS and MongoDB.
      </p>

      <p>
        In my free time, I like to go on hikes, study Japanese, and work on my{' '}
        <Link to="/projects">projects</Link>.
      </p>

      <p>
        Check out <Link to="/blog">my blog</Link> or{' '}
        <a href="mailto:l.behrenberg@gmail.com">email me</a>.
      </p>

      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra.
      </p>
      <p>
        Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
        wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
        rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
        pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
        faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
        Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
        facilisis luctus, metus
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra.
      </p>
      <p>
        Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
        wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
        rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
        pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
        faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
        Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
        facilisis luctus, metus
      </p>
    </Container>
  </div>
);

export default AboutPage;

export const data = graphql`
  query {
    file(absolutePath: { regex: "/profile-picture.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
