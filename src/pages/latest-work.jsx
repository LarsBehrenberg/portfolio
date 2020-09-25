import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { LocaleContext } from '../components/Layout'
import { SEO, WorksList } from '../components'
import { Subtitle, NameHeader } from '../components/Common'

const Container = styled.div`
  max-width: 600px;
  margin-bottom: -3rem;
`

const LatestWork = ({
  data: { latest_work },
  pageContext: { locale },
  location,
}) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const { title, subtitle, description, works } = latest_work.data
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <Container>
        <Subtitle>{subtitle.text}</Subtitle>
        <NameHeader>{title.text}</NameHeader>
        <div dangerouslySetInnerHTML={{ __html: description.html }} />
      </Container>
      <WorksList works={works} id="works" />
    </>
  )
}

export default LatestWork

export const pageQuery = graphql`
  query LatestWorkQuery($locale: String!) {
    latest_work: prismicLatestWork(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        description {
          html
        }
        works: body {
          id
          primary {
            work_title {
              text
            }
            work_description {
              html
            }
            work_link {
              url
            }
            work_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
