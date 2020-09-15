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
        <StyledMobileMenu lang={lang} />
      </NavbarEl>
    )
  }
}

export default Navbar
