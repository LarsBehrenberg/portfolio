import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SEO } from 'layout';
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
  float: right;
  margin: 0rem 0 0.5rem 1rem;

  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
  }

  .image {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
  }
  @media (max-width: 570px) {
    float: none;
    width: 300px;
    margin: 0 auto 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 1em 0.3em 0.5em;
  }
`;

const AboutPage = ({ data }) => (
  <div>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>About Me</h1>
      <Image>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt=""
          style={{ width: '300px', objectFit: 'cover' }}
          className="image"
        />

        <IconContainer>
          <IconContext.Provider value={{ color: '#ffffff90', size: '1.4em' }}>
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

            <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
              <AiOutlineMail />
            </a>
          </IconContext.Provider>
        </IconContainer>
      </Image>
      <p>
        <strong>Lars Behrenberg - Web Developer</strong>
      </p>

      <p>
        For many people websites have always been a struggle. A necessity for
        your business, but something difficult in the back of your head that you
        don&rsquo;t really want to deal with.
      </p>

      <blockquote style={{ textAlign: 'center', fontWeight: '800' }}>
        How do you reach your costumers, provide information and present your
        business online that it truly represents you and what you do?
      </blockquote>

      <p>This is difficult and is hard to do right.</p>

      <p>
        In 2016 I did my first website and since then have grappled with this
        question.
      </p>

      <p>
        But after years of experience and a variety of clients from personal
        portfolios to local businesses and even travel blogs, I will make sure
        to capture you and your business in a single website, similar to a
        moving image telling your visitor about what you do and who you are.
      </p>

      <p>
        The first website I did was for a small local business back in my
        hometown in Germany. After this first project, I wanted to understand
        more about not only the internet, but also about the people that all
        this information on the internet is about.
      </p>

      <p>
        So I went all out and traveled the world for 3 years. I connected with
        people from all around the world and studied the internet and its
        technologies. I found my passion in connecting the internet with the
        people around me.&nbsp;
      </p>

      <p>
        After these years of traveling, I found myself in Japan, the country
        where I felt I could learn the most about its people, the internet and
        myself. I am now based in Nagano, Japan, but travel frequently to Europe
        and all other parts of the world.
      </p>

      <p>
        If any of this sounded like this is for you, please feel free to contact
        me on{' '}
        <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
          l.behrenberg@gmail.com
        </a>
        .
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
