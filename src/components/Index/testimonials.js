import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const Container = styled.div`
  max-width: 800px;
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

const TestimonialContainer = styled.section`
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0px 0px 128px;
  border-radius: 0.4rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    div,
    img {
      border-radius: 0;
    }
  }
`;

const Image = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / 7;

  border-radius: 0.4rem 0 0 0.4rem;
  &,
  img {
    border-radius: 0.4rem 0 0 0.4rem;
    max-height: 330px;
  }
`;

const Text = styled.div`
  line-height: 1.5;
  border-radius: 0 0.4rem 0.4rem 0;
  color: rgb(255, 255, 255);
  grid-row: 1 / 4;
  grid-column: 7 / 13;
  padding: 32px;
  background-color: rgb(21, 38, 50);

  h2 {
    margin-bottom: 0.4rem;
  }
`;

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
  background-color: rgb(6, 82, 221);
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px,
    rgba(0, 0, 0, 0.08) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease 0s;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  order: 2;
  z-index: 2;
  grid-row: 3 / 3;
  grid-column: 5 / 7;
  padding: 32px;
`;
const Testimonials = ({ testimonial }) => (
  <>
    <Container>
      <Subtitle>What My Clients Say About My Work</Subtitle>
      <NameHeader>Testimonials</NameHeader>
      <p>
        Your website is the digital brochure and a potential storefront of your
        business. I create bespoke Fullstack websites from the front-end designs
        to the outstanding backend capabilities which become fully customisable
        for any ability of the user.
      </p>
      <p>
        I create bespoke Fullstack websites from the front-end designs to the
        outstandin.
      </p>
    </Container>
    <TestimonialContainer>
      <Image>
        <Img
          fluid={testimonial.frontmatter.cover.childImageSharp.fluid}
          alt="Michael Fassnachts Testimonial"
          style={{ objectFit: 'fit' }}
        />
      </Image>
      <Button>Next</Button>
      <Text>
        <h2>{testimonial.frontmatter.title}</h2>
        <h4>{testimonial.frontmatter.subtitle}</h4>
        <div dangerouslySetInnerHTML={{ __html: testimonial.html }} />
      </Text>
    </TestimonialContainer>
  </>
);

export default Testimonials;
