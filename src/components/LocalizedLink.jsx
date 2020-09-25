import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleContext } from './Layout'
import locales from '../../config/i18n'

const LocalizedLink = ({ to, ...props }) => {
  const lang = React.useContext(LocaleContext)

  const locale = lang.locale ? lang.locale : "en-us"
  const isIndex = to === '/'
  const path = locales[locale].default
    ? to
    : `/${locales[locale].path}${isIndex ? '' : `${to}`}`

  return <Link {...props} to={path} />
}

export default LocalizedLink

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
}
