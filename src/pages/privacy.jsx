import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 1.0875rem;
`

const Privacy = ({ data: { privacy }, pageContext: { locale }, location }) => (
  <>
    <SEO pathname={location.pathname} locale={locale} />
    <Container>
      <div dangerouslySetInnerHTML={{ __html: privacy.data.text.html }} />
    </Container>
  </>
)

export default Privacy

export const pageQuery = graphql`
  query privacyQuery($locale: String!) {
    privacy: prismicPrivacy(lang: { eq: $locale }) {
      data {
        text {
          html
        }
      }
    }
  }
`
