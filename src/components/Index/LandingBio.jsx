import React from 'react'
import styled from '@emotion/styled'
import { Subtitle, NameHeader, ButtonContainer, Button } from '../Common'

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

const LandingBio = ({ title, subtitle, intro }) => (
  <OuterContainer>
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <NameHeader>{title}</NameHeader>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      <ButtonContainer>
        <Button to="/latest-work" type="GatsbyLink">
          Latest Work
        </Button>
        <Button
          type="MailToUi"
          className="mailtoui"
          href="mailto:l.behrenberg@gmail.com"
        >
          Get In Touch
        </Button>
      </ButtonContainer>
    </Container>
  </OuterContainer>
)

export default LandingBio
