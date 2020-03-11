import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  width: 860px;
  padding: 1.45rem 1.0875rem;
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`


const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <OuterContainer>
        <Container>
        <h1>Projects</h1>
        <p><strong>Here are my recent</strong></p>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
        
        </Container>
    </OuterContainer>
  </Layout>
)

export default ProjectsPage