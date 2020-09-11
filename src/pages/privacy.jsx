import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
`

const Privacy = ({ data: { about }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: about.data.body.html }} />
      </Container>
    </>
  )
}

export default Privacy

export const pageQuery = graphql`
  query privacyQuery($locale: String!) {
    about: prismicAbout(lang: { eq: $locale }) {
      data {
        title {
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
