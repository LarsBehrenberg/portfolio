import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/SEO'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 1.0875rem;
`

const Imprint = ({ data: { imprint }, pageContext: { locale }, location }) => (
  <>
    <SEO pathname={location.pathname} locale={locale} />
    <Container>
      <div dangerouslySetInnerHTML={{ __html: imprint.data.text.html }} />
    </Container>
  </>
)

export default Imprint

export const pageQuery = graphql`
  query imprintQuery($locale: String!) {
    imprint: prismicImprint(lang: { eq: $locale }) {
      data {
        text {
          html
        }
      }
    }
  }
`
