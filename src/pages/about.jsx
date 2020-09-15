import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaXing } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import styled from '@emotion/styled'

import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;
`

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`

const Subtitle = styled.p`
  margin-bottom: 0.7rem;
  margin-left: 5px;
  font-size: 1.3rem;
  border-left: 2px solid white;
  padding-left: 0.8rem;
`

const Image = styled.div`
  float: right;
  margin: 1rem 0 0.5rem 1rem;

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
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 1em 0.3em 0.5em;
  }
`

const About = ({ data: { about }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <Container>
        <Image>
          <Img
            fluid={about.data.profile_image.localFile.childImageSharp.fluid}
            alt="Personal image"
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
        <Subtitle>{about.data.subtitle.text}</Subtitle>
        <NameHeader>{about.data.title.text}</NameHeader>
        <div dangerouslySetInnerHTML={{ __html: about.data.body.html }} />
      </Container>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery($locale: String!) {
    about: prismicAbout(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        body {
          html
        }
        profile_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
