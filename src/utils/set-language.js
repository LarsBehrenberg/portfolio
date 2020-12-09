// Redirect to correct language
export const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return ''
  }

  const lang =
    navigator && navigator.language && navigator.language.split('-')[0]
  if (!lang) return 'en'

  switch (lang) {
    case 'ja':
      return 'jp'
    case 'ja-JP':
      return 'jp'
    case 'de':
      return 'de'
    default:
      return ''
  }
}
