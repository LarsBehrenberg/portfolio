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
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    alwaysThere: 'Always Available For A Chat',
    myName: 'Lars Behrenberg',
    buttonone: 'Latest Work',
    buttontwo: 'Get In Touch',
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
    headline:
      'Platform-übergreifendes Design / Front-End Entwicklung / Back-End Entwicklung',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    alwaysThere: 'Jederzeit für Sie da',
    myName: 'Lars Behrenberg',
    buttonone: 'Letzte Projekte',
    buttontwo: 'Kontakt',
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
    defaultDescription: 'フリーランス　ウェブデベロッパー',
    headline:
      'ユーザー重視のデザイン・フロント・エンド デベロップメント（Front-End Development）・バック エンド デベロップメント（Back-End Development）',
    imprint: 'インプリント',
    privacy: 'プライバシーポリシー',
    alwaysThere: 'いつでもコンタクト',
    myName: 'ラース　ベレンバーグ',
    buttonone: 'プロジェクト',
    buttontwo: '問い合わせ',
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
