import React from "react"

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
  <div>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <OuterContainer>
        <Container>
        <h1>Projects</h1>
        <p><strong>I have recently built:</strong></p>
        <ul>
          <li><a href="https://tfbs.de" target="_blank" rel="noopener noreferrer">t.f.b.s - Telgte</a> | A small consulting company based in Telgte, Germany</li>
          <li><a href="https://alexkerr.net" target="_blank" rel="noopener noreferrer">Alex Kerr</a> | A personal website of a Japanologist and Author</li>
          <li><a href="https://chihirohori.com" target="_blank" rel="noopener noreferrer">Chihiro Hori</a> | A business website of a Nutrionist based in Japan</li>
        </ul>
        
        </Container>
    </OuterContainer>
  </div>
)

export default ProjectsPage