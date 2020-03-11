import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <OuterContainer>
        <Container>
        <h1>About Me</h1>
        <p><strong>Lars Behrenberg - Web Developer</strong></p>

        <p>Currently working as a Freelancer in <a href="https://www.google.com/maps/place/Kyoto,+Japan/" target="_blank">Kyoto, Japan</a>.
            I build websites and applications using HTML, CSS, React, NodeJS, ExpressJS and MongoDB.</p>

        <p>In my free time, I like to go on hikes, study Japanese, and work on my <a href="#projects">side
                projects</a>.</p>

        <p>Check out <a href="https://blog.larsbehrenberg.com/" target="_blank">my blog</a> or <a href="mailto:me@larsbehrenberg.com">email me</a>.</p>

        <div>
          <ul>
              {/* <!-- <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li> -->
              <!-- <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li> -->
              <!-- <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li> -->
              <!-- <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li> --> */}
              {/* <li><a href="https://www.linkedin.com/in/lars-behrenberg/" target="_blank" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/larsbehrenberg" target="_blank" class="social-icon"> <i class="fa fa-github"></i></a></li> */}
          </ul>
        </div>
        </Container>
    </OuterContainer>
  </Layout>
)

export default AboutPage