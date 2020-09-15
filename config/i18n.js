const website = require('./website')

module.exports = {
  'en-us': {
    default: true,
    path: 'en',
    name: 'English',
    locale: 'en-us',
    siteLanguage: 'en',
    ogLang: 'en_US',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
    hireMe: 'Hire Me',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    alwaysThere: 'Always Available For A Chat',
    menu: [
      { title: 'Home', link: '/' },
      {
        title: 'Latest Work',
        link: '/latest-work',
      },
      {
        title: 'About',
        link: '/about',
      },
      {
        title: 'Get In Touch',
        link: '/',
      },
      {
        title: 'Languages',
        link: '/',
      },
    ],
  },
  'de-de': {
    default: false,
    path: 'de',
    name: 'Deutsch',
    locale: 'de-de',
    siteLanguage: 'de',
    ogLang: 'de_DE',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: 'Freiberuflicher Website Developer ',
    headline: 'Schreiben und Veröffentlichen von Lars Behrenberg',
    hireMe: 'Erstgespräch',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    alwaysThere: 'Jederzeit für Sie da',
    menu: [
      { title: 'Home', link: '/' },
      {
        title: 'Letzte Projekte',
        link: '/latest-work',
      },
      {
        title: 'Über Mich',
        link: '/about',
      },
      {
        title: 'Kontakt',
        link: '/',
      },
      {
        title: 'Languages',
        link: '/',
      },
    ],
  },
  'ja-jp': {
    default: false,
    path: 'jp',
    name: 'Japanese',
    locale: 'ja-jp',
    siteLanguage: 'ja',
    ogLang: 'ja_JP',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: 'Freiberuflicher Website Developer ',
    headline: 'Schreiben und Veröffentlichen von Lars Behrenberg',
    hireMe: 'Erstgespräch',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    alwaysThere: 'Jederzeit für Sie da',
    menu: [
      { title: 'ホーム', link: '/' },
      {
        title: 'プロジェクト',
        link: '/latest-work',
      },
      {
        title: '経歴',
        link: '/about',
      },
      {
        title: '問い合わせ',
        link: '/',
      },
      {
        title: 'Languages',
        link: '/',
      },
    ],
  },
}
