module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Lars Behrenberg | Freelance Website Developer', // Navigation and Site Title
  titleAlt: 'Freelance Website Developer', // Title for JSONLD
  description: 'A freelance website developer website by Lars Behrenberg',
  headline: 'Writing and publishing content by Lars Behrenberg', // Headline for schema.org JSONLD
  url: 'https://larsbehrenberg.com', // Domain of your site. No trailing slash!
  logo: '/logos/logo_white.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/logos/icon.png', // Used for manifest favicon generation
  shortName: 'WebDevLars', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LarsBehrenberg', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@codetraveling', // Twitter Username
  facebook: 'larsbehrenberg', // Facebook Site Name
  googleAnalyticsID: 'UA-158747913-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
