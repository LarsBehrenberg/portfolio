import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import { PostList } from '../components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 1.0875rem;
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 3rem 1rem 1rem 1rem;
  }
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 2rem auto 1rem auto;
    a.grid-view:first-of-type:nth-last-of-type(2),
    a.grid-view:first-of-type:nth-last-of-type(2) ~ a.grid-view {
      flex-basis: 48%;
      max-width: 48%;
      width: 48%;
    }
    & a.grid-view:nth-of-type(5n-1),
    a.grid-view:nth-of-type(5n) {
      flex-basis: 48%;
      max-width: 48%;
      width: 48%;
    }
  }
`

const Blog = ({ data: { posts }, pageContext: { locale }, location }) => (
  <>
    <SEO pathname={location.pathname} locale={locale} />
    <Container>
      {/* <div dangerouslySetInnerHTML={{ __html: imprint.data.text.html }} /> */}
      <h1 style={{ textAlign: 'center' }}>Blog</h1>
      <PostWrapper>
        {posts.nodes.map(({ data, id, uid }) => {
          const { title, cover_image } = data

          return (
            <PostList
              key={id}
              cover={cover_image.localFile.childImageSharp.fluid}
              path={uid}
              title={title.text}
              subTitle={title.text}
              date={'2020.01'}
              excerpt={title.text}
              view={'grid'}
            />
          )
        })}
        {posts.nodes.map(({ data, id, uid }) => {
          const { title, cover_image } = data

          return (
            <PostList
              key={id}
              cover={cover_image.localFile.childImageSharp.fluid}
              path={uid}
              title={title.text}
              subTitle={title.text}
              date={'2020.01'}
              excerpt={title.text}
              view={'grid'}
            />
          )
        })}
      </PostWrapper>
    </Container>
  </>
)

export default Blog

export const pageQuery = graphql`
  query blogQuery {
    posts: allPrismicBlogPost {
      nodes {
        id
        uid
        data {
          title {
            text
          }
          cover_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          content {
            html
          }
        }
      }
    }
  }
`
