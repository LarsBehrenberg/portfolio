import React from 'react'
import styled from '@emotion/styled'
import { slide as BurgerMenu } from 'react-burger-menu'
import LocalizedLink from '../../LocalizedLink'
import { Link } from 'gatsby'
import { LinkList, DropdownSection } from '../DropdownContents/Components'

const MobileMenu = styled(BurgerMenu)`
  a {
    color: white;
    text-decoration: none;
    transition: color ease-out 300ms;
  }

  a:hover {
    color: grey;
  }
`

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '30px',
    height: '25px',
    margin: '1.7rem 1rem 0',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#ffffff80',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#fff',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
  },
  bmMenu: {
    background: 'rgb(21,38,50)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    padding: '2em 0 2em 2em',
  },
  bmItem: {
    display: 'block',
    marginBottom: '1.5em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',
    left: '0',
    width: '100vw',
  },
}

const regex = /\/de\/|\/de|\//gi

const StyledMobileMenu = ({ lang }) => (
  <MobileMenu
    styles={styles}
    pageWrapId={'page-wrap'}
    outerContainerId={'gatsby-focus-wrapper'}
    id="mobile-button"
    isOpen={false}
    right
    disableAutoFocus
  >
    {lang.i18n[lang.locale].menu.map(item => {
      if (item.title === 'Get In Touch' && 'Kontakt') {
        return (
          <a
            className="mailtoui"
            href="mailto:l.behrenberg@gmail.com"
            key="Get In Touch"
          >
            {item.title}
          </a>
        )
      } else if (item.title === 'Languages') {
        {
          return (
            <DropdownSection key="Languages">
              <LinkList>
                {Object.values(lang.i18n).map(
                  ({ path, locale, ogLang, name }) => {
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
                  }
                )}
              </LinkList>
            </DropdownSection>
          )
        }
      } else {
        return (
          <LocalizedLink to={item.link} key={item.title}>
            {item.title}
          </LocalizedLink>
        )
      }
    })}
  </MobileMenu>
)

export default StyledMobileMenu
