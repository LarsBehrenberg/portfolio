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
        title: 'Blog',
        link: 'https://blog.larsbehrenberg.com',
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
    defaultTitle: 'Lars Behrenberg | Freelance Webseiten Entwickler',
    defaultTitleAlt: 'Lars Behrenberg | Freelance Webseiten Entwickler',
    defaultDescription:
      'Ihre Webseite ist die digitale Broschüre und potentielle digitale Fassade Ihres Geschäfts. Ich verhelfe Ihnen zu einer Full-Stack Webseite vom individuellen Design bis hin zu den passenden Funktionalitäten im Hintergrund der Webseite.',
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
        title: 'Blog',
        link: 'https://blog.larsbehrenberg.com',
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
    defaultTitle:
      'ベレンバーグ・ラース | ユーザー重視のデザイン・フロント・エンド デベロップメント（Front-End Development）・バック エンド デベロップメント（Back-End Development）',
    defaultTitleAlt:
      'ベレンバーグ・ラース | ユーザー重視のデザイン・フロント・エンド デベロップメント（Front-End Development）・バック エンド デベロップメント（Back-End Development）',
    defaultDescription:
      'ウェブサイトとはデジタル化されたパンフレットであり、またあなたのビジネスのショーウインドーでもあります。世界に一つしかないオーダーメイドのウェブサイトを作ってみませんか？',
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
        title: 'ブログ',
        link: 'https://blog.larsbehrenberg.com',
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
