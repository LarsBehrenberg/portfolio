import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import LocalizedLink from '../../LocalizedLink'
import { GiWorld } from 'react-icons/gi'

const NavbarItemTitle = styled(LocalizedLink)`
  color: white;
  /* display: flex;
  justify-content: center; */
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const NavbarItemEl = styled.li`
  position: relative;

  color: white;
  padding: 0 0.3rem 0.3rem;
  margin: 0 1rem;
  a {
    text-decoration: none;

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  top: 2.5rem;
  transform: translateX(-50%);
  perspective: 1500px;
  z-index: 10;
`

const LangSwitcher = styled(GiWorld)`
  margin-top: 0.1rem;
  path {
    transition: fill ease-out 100ms;
  }
  :hover path {
    fill: grey;
  }
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node,
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children, link } = this.props
    return (
      <NavbarItemEl
        onMouseEnter={this.props.onMouseEnter ? this.onMouseEnter : null}
        onFocus={this.props.onMouseEnter ? this.onMouseEnter : null}
      >
        {title !== 'Get In Touch' &&
        title !== 'Kontakt' &&
        title !== 'Languages' ? (
          <NavbarItemTitle to={link}>{title}</NavbarItemTitle>
        ) : title === 'Languages' ? (
          <LangSwitcher />
        ) : (
          <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
            {title}
          </a>
        )}

        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
