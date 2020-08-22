import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const OuterContainer = styled.div`
  & > div:nth-of-type(2n) {
    flex-direction: row-reverse;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

const Container = styled.div`
  margin-top: 8rem;
  width: 100%;
  min-height: 300px;

  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

const Image = styled.div`
  background: grey;
  width: 50%;
  max-height: 330px;

  @media (max-width: 800px) {
    height: 300px;
    margin-bottom: 2rem;
  }
  border-radius: 0.4rem;
  .image {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
  }
`;

const Text = styled.div`
  width: 50%;

  padding: 0 1rem 0 3rem;
  @media (max-width: 800px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem 3rem 1rem;
  }
`;

const SingleSkill = ({ title, description, image }) => (
  <Container>
    <Image>
      <Img
        fluid={image}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        objectFit="cover"
        className="image"
      />
    </Image>
    <Text>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Text>
  </Container>
);

const Skills = ({ skills, id }) => (
  <OuterContainer id={id || 'skills'}>
    {skills.map(({ id, html, excerpt, frontmatter: { title, cover } }) => (
      <SingleSkill
        key={id}
        title={title}
        description={html || excerpt}
        image={cover.childImageSharp.fluid}
      />
    ))}
  </OuterContainer>
);

export default Skills;