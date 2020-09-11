import React from 'react'
import styled from '@emotion/styled'
import { slide as BurgerMenu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { MenuArrow } from 'components'

const MobileMenu = styled(BurgerMenu)`
  a {
    color: white;
    text-decoration: none;
  }

  a:hover,
  .active {
    background: -webkit-linear-gradient(45deg, #ac7447, #f4c7a7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '30px',
    height: '25px',
    margin: '5px 5px 0',
  },
  bmBurgerBars: {
    background: '-webkit-linear-gradient(45deg, #fff, #f4c7a7)',
  },
  bmBurgerBarsHover: {
    background: '-webkit-linear-gradient(45deg, #ac7447, #f4c7a7)',
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
    background: '#020305',
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

const StyledMobileMenu = () => (
  <MobileMenu
    styles={styles}
    pageWrapId={'page-wrap'}
    outerContainerId={'gatsby-focus-wrapper'}
    id="mobile-button"
    isOpen={false}
    right
    disableAutoFocus
  >
    <Link to="/" activeClassName="active">
      <MenuArrow /> Home
    </Link>
    <Link to="/vibrational-medicine" activeClassName="active">
      <MenuArrow /> Vibrational Medicine
    </Link>
    <Link to="/for-all-creation" activeClassName="active">
      <MenuArrow /> For All Creation
    </Link>
    <Link to="/blog" activeClassName="active">
      <MenuArrow /> Blog
    </Link>
    <Link to="/contact" activeClassName="active">
      <MenuArrow /> Contact
    </Link>
  </MobileMenu>
)

export default StyledMobileMenu
