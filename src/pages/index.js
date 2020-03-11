import React from "react"

import LandingBio from "../components/landing-bio"
import SEO from "../components/seo"

const IndexPage = () => (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <LandingBio />
    </div>
)

export default IndexPage
