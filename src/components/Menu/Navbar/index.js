import React, { Component } from 'react'
import styled from '@emotion/styled'
import LocalizedLink from '../../LocalizedLink'
import Logo1 from '../../../../static/logos/logo_white.png'
import StyledMobileMenu from './MobileMenu'

const NavbarEl = styled.nav`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.0875rem 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  * {
    margin-bottom: 0;
  }

  img {
    margin-top: 1.5rem;
  }

  @media (min-width: 800px) {
    & > div {
      flex: 1 1 auto;
    }

    & a:first-of-type,
    a:last-of-type {
      flex: 0 0 100px;
    }
    & > div:last-child  {
      margin-top: 3px;
      height: 25px;
      position: relative;
      display: none;
    }
  }
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 1.7rem 0 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`

const HireButton = styled.a`
  margin-top: 1.35rem;
  text-decoration: none;
  div {
    padding: 0.3rem 0.5rem;
    background: none;
    color: #fff;
    span {
      display: inline-block;
      position: relative;
      transition: all 300ms ease-out;
      will-change: transform;
    }
    &:hover span {
      transform: translate3d(-0.5rem, 0, 0);
    }
    svg {
      position: absolute;
      width: 1.1em;
      right: 0px;
      right: 0rem;
      opacity: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: all 300ms ease-out;
      will-change: right, opacity;
      * {
        stroke-width: 5;
      }
    }
    &:hover svg {
      opacity: 1;
      right: -1.5rem;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave, lang } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <LocalizedLink to="/">
          <img src={Logo1} alt="Logo" style={{ width: '60px' }} />
        </LocalizedLink>
        <NavbarList>{children}</NavbarList>
        <HireButton className="mailtoui" href="mailto:l.behrenberg@gmail.com">
          <div>
            <span>
              {lang.i18n[lang.locale].hireMe}
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: '5px', display: 'inline-block' }}
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M15.2894 10.9901L6.6897 19.5895C6.14266 20.1368 5.25572 20.1368 4.70894 19.5895C4.16212 19.0427 4.16212 18.1558 4.70894 17.609L12.3183 9.99986L4.70917 2.39095C4.16234 1.84391 4.16234 0.957105 4.70917 0.410283C5.25599 -0.136761 6.14288 -0.136761 6.68992 0.410283L15.2896 9.00983C15.563 9.28337 15.6996 9.64151 15.6996 9.99981C15.6996 10.3583 15.5628 10.7167 15.2894 10.9901Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </HireButton>
        <StyledMobileMenu lang={lang} />
      </NavbarEl>
    )
  }
}

export default Navbar
