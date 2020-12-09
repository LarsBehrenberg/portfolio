import React, { useEffect } from 'react'
import { graphql, navigate } from 'gatsby'
import { LocaleContext } from '../components/Layout'

// Components
import {
  LandingBio,
  SEO,
  GoNextButton,
  Testimonials,
  Skills,
} from '../components'

// Utils
import { getRedirectLanguage } from '../utils/set-language'

const Index = ({ data: { homepage }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const { buttonone, buttontwo } = lang.i18n[lang.locale]

  useEffect(() => {
    // Fade out scroll button after scrolling down
    let prevScrollpos = window.pageYOffset

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (
        prevScrollpos > currentScrollPos &&
        document.getElementById('scroll-button')
      ) {
        document.getElementById('scroll-button').style.opacity = '1'
      } else if (document.getElementById('scroll-button')) {
        document.getElementById('scroll-button').style.opacity = '0'
        document.getElementById('scroll-button').style.cursor = 'default'
      }
      prevScrollpos = currentScrollPos
    }

    // Redirect to correct language on page load
    // if user doesnt have current session, then redirect to correct language
    // otherwise dont do anything
    if (!sessionStorage.getItem('loggedin')) {
      sessionStorage.setItem('loggedin', true)
      //redirect
      const urlLang = getRedirectLanguage()
      navigate(`/${urlLang}`, { replace: true })
    }

    return
  }, [])

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <LandingBio
        title={homepage.data.title.text}
        subtitle={homepage.data.subtitle.text}
        intro={homepage.data.introduction_text.html}
        buttons={[buttonone, buttontwo]}
        images={homepage.data.images}
      />
      <GoNextButton />
      <Testimonials
        clients={homepage.data.testimonials[0].primary}
        title={homepage.data.testimonials_title.text}
        subtitle={homepage.data.testimonials_subtitle.text}
        intro={homepage.data.testimonials_introduction.html}
      />
      <Skills skills={homepage.data.skills} />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    homepage: prismicHomepage(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        introduction_text {
          html
        }
        images {
          image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 350, traceSVG: { color: "#152632" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        testimonials_title {
          text
        }
        testimonials_subtitle {
          text
        }
        testimonials_introduction {
          html
        }
        testimonials: body {
          primary {
            client_title {
              text
            }
            client_subtitle {
              text
            }
            client_text {
              html
            }
            client_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, traceSVG: { color: "#152632" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
        skills: body1 {
          id
          primary {
            skill_title {
              text
            }
            skill_description {
              html
            }
            skill_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, traceSVG: { color: "#152632" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
