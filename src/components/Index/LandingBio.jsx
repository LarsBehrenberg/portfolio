import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Subtitle, NameHeader, ButtonContainer, Button } from '../Common'
import ProjectSlider from './ProjectSlider'

const OuterContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  min-height: 60vh;

  > * {
    width: 50%;
  }

  & > *:not(:last-of-type) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;

    > * {
      width: 100%;
      margin-right: 0;
    }
  }
`

const TextContainer = styled.div`
  max-width: 600px;
  margin: auto 0;
`

const LandingBio = ({ title, subtitle, intro, buttons, images }) => (
  <OuterContainer>
    <TextContainer>
      <Subtitle>{subtitle}</Subtitle>
      <NameHeader>{title}</NameHeader>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      <ButtonContainer>
        <Button to="/latest-work" type="GatsbyLink">
          {buttons[0]}
        </Button>
        <Button type="MailToUi" href="mailto:info@larsbehrenberg.com">
          {buttons[1]}
        </Button>
      </ButtonContainer>
    </TextContainer>
    <ProjectSlider images={images} />
  </OuterContainer>
)

export default LandingBio
