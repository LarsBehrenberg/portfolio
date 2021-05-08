import React from "react";
// import { Element } from "react-scroll";

import { useIntl } from "gatsby-plugin-intl";

import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import Hero from "../sections/landing1/Hero";
// import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = ({ pageContext }) => {
  const intl = useIntl();
  return (
    <>
      <PageWrapper>
        <SEO
          index
          title={intl.formatMessage({ id: "seo_title" })}
          description={intl.formatMessage({ id: "seo_description" })}
          lang={pageContext.intl.language}
        />
        {/* <SEO title={<FormattedMessage id="seo_title" />} /> */}
        <Hero />
        {/* <Element name="works">
          <Works />
        </Element> */}
        <Contact />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
