module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Lars Behrenberg | Freelance Website Developer', // Navigation and Site Title
  titleAlt: 'Lars Behrenberg | Freelance Website Developer', // Title for JSONLD
  description:
    'Your website is the digital brochure and a potential storefront of your business. I create bespoke Fullstack websites from the front-end designs to the outstanding backend capabilities which become fully customisable for any ability of the user.',
  headline:
    'User-Focused Design / Front-End Development / Back-End Development', // Headline for schema.org JSONLD
  url: 'https://larsbehrenberg.com', // Domain of your site. No trailing slash!
  logo: '/logos/header.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/logos/icon.png', // Used for manifest favicon generation
  shortName: 'CodeWithLars', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LarsBehrenberg', // Author for schemaORGJSONLD
  themeColor: '#ffffff',
  backgroundColor: '#152632',

  twitter: '@codetraveling', // Twitter Username
  facebook: 'larsbehrenberg', // Facebook Site Name
  googleAnalyticsID: 'G-SX9V7C8ZY0',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
