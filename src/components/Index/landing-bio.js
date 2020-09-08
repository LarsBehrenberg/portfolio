import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  max-height: 700px;
`

const Container = styled.div`
  max-width: 600px;
`

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`

const Subtitle = styled.p`
  margin-bottom: 0.3rem;
  margin-left: 5px;
  font-size: 1.4rem;
  border-left: 2px solid white;
  padding-left: 0.8rem;
`

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
`

const LandingBio = () => (
  <OuterContainer>
    <Container>
      <Subtitle>Freelance Website Developer</Subtitle>
      <NameHeader>Lars Behrenberg</NameHeader>
      <p>
        Your website is the digital brochure and a potential storefront of your
        business. I create bespoke Fullstack websites from the front-end designs
        to the outstanding backend capabilities which become fully customisable
        for any ability of the user.
      </p>
      <p>
        Beautiful websites are what I do best, coding in range of languages
        including HTML, CSS, SCSS, JavaScript, jQuery, PHP and working with
        popular frameworks like React, WordPress and Gatsby I can create a space
        for you to grow your business and share your success.
      </p>
      <ButtonContainer>
        <Link to="/latest-work">Latest Work</Link>
        <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
          Get In Touch
        </a>
      </ButtonContainer>
    </Container>
  </OuterContainer>
)

export default LandingBio
