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
        <p><strong>Websites I have recently built:</strong></p>
        <ul>
          <li><a href="https://tfbs.de" target="_blank" rel="noopener noreferrer">t.f.b.s - Telgte</a> | A small consulting company based in Telgte, Germany</li>
          <li><a href="https://alexkerr.net" target="_blank" rel="noopener noreferrer">Alex Kerr</a> | A personal/business website of a Japanologist and Author</li>
          <li><a href="https://chihirohori.com" target="_blank" rel="noopener noreferrer">Chihiro Hori</a> | A business website of a Nutritionist based in Japan</li>
        </ul>
        <br/>
        <p><strong>Applications I have recently built:</strong></p>
        <ul>
          <li><a href="https://codepen.io/lars281/full/MWgZwXQ" target="_blank" rel="noopener noreferrer">D3.js: Treemap Diagram</a> | Top 100 Most Sold Video Games Grouped by Platform</li>
          <li><a href="https://codepen.io/lars281/full/JjPeMyO" target="_blank" rel="noopener noreferrer">D3.js: Choropleth Map</a> | Percentage of adults age 25 and older with a bachelor's degree or higher in the USA (2010-2014)</li>
          <li><a href="https://codepen.io/lars281/full/yLBjZzL" target="_blank" rel="noopener noreferrer">D3.js: Heat Map</a> | Monthly Global Land-Surface Temperature (1753 - 2015)</li>
        </ul>
        
        </Container>
    </OuterContainer>
  </div>
)

export default ProjectsPage