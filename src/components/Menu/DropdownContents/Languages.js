import React from 'react'
import { DropdownEl, DropdownSection, LinkList } from './Components'
// import LocalizedLink from '../../LocalizedLink'
import { Link } from 'gatsby'

const Languages = ({ lang }) => {
  const regex = /\/de\/|\/de|\/jp\/|\/jp|\//gi

  return (
    <DropdownEl>
      <DropdownSection>
        <LinkList>
          {Object.values(lang.i18n).map(({ path, locale, ogLang, name }) => {
            return (
              <li key={ogLang}>
                <Link
                  hrefLang={locale}
                  key={ogLang}
                  to={`/${lang.location.pathname.replace(
                    regex,
                    path === 'en' ? '' : path + '/'
                  )}`}
                >
                  {path.toUpperCase()}{' '}
                </Link>
              </li>
            )
          })}
        </LinkList>
      </DropdownSection>
    </DropdownEl>
  )
}

export default Languages
