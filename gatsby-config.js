module.exports = {
  siteMetadata: {
    pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: "Lars Behrenberg", // Navigation and Site Title
    titleAlt: "LarsBehrenberg", // Title for JSONLD
    description:
      "Your website is the digital brochure and a potential storefront of your business. I create bespoke Fullstack websites from the front-end designs...",
    url: "https://portfolio-new.netlify.app", // Domain of your site. No trailing slash!
    siteUrl: "https://portfolio-new.netlify.app", // url + pathPrefix
    siteLanguage: "en", // Language Tag on <html> element
    logo: "/favicon.png", // Used for SEO
    banner: "/seo-banner.png", // Banner for SEO
    favicon: "static/favicon.png", // Used for manifest favicon generation
    shortName: "behrenberg.", // shortname for manifest. MUST be shorter than 12 characters
    author: "Lars", // Author for schemaORGJSONLD
    themeColor: "#485EEE",
    backgroundColor: "#ffffff",
    twitter: "", // Twitter Username
    adsenseId: "", //eg: ca-pub-7292810486004926
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-SX9V7C8ZY0",
          // Setting this parameter is optional
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-layouts`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`, `de`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
      },
    },
  ],
};
