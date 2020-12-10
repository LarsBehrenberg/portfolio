import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/SEO'

const Container = styled.div`
  min-height: 70vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const NotFound = ({ pageContext: { locale }, location }) => (
  <>
    <SEO pathname={location.pathname} locale={locale} />
    <Container>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
    </Container>
  </>
)

export default NotFound
