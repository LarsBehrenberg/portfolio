import React, { Component } from 'react'
import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import { Flipper } from 'react-flip-toolkit'
import DropdownContainer from './DropdownContainer'
import Languages from './DropdownContents/Languages'

const navbarConfig = [
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
    dropdown: Languages,
    link: '/',
  },
]

export default class AnimatedNavbar extends Component {
  state = {
    activeIndices: [],
  }

  resetDropdownState = i => {
    this.setState({
      activeIndices: typeof i === 'number' ? [i] : [],
      animatingOut: false,
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = i => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState(i)
      return
    }
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return

    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false,
    }))
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true,
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  }

  render() {
    const { duration } = this.props
    let CurrentDropdown
    let PrevDropdown
    let direction

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ]
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2]

    if (typeof currentIndex === 'number')
      CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === 'number') {
      PrevDropdown = navbarConfig[prevIndex].dropdown
      direction = currentIndex > prevIndex ? 'right' : 'left'
    }

    return (
      <Flipper
        flipKey={currentIndex}
        spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}
        style={{ width: '100%' }}
      >
        <Navbar onMouseLeave={this.onMouseLeave} lang={this.props.lang}>
          {this.props.lang.i18n[this.props.lang.locale].menu.map((n, index) => {
            return (
              <NavbarItem
                key={n.title}
                title={n.title}
                link={n.link}
                index={index}
                onMouseEnter={
                  n.title === 'Languages'
                    ? Languages
                      ? this.onMouseEnter
                      : this.onMouseLeave
                    : null
                }
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={this.state.animatingOut}
                    duration={duration}
                  >
                    <CurrentDropdown lang={this.props.lang} />
                    {PrevDropdown && <PrevDropdown />}
                  </DropdownContainer>
                )}
              </NavbarItem>
            )
          })}
        </Navbar>
      </Flipper>
    )
  }
}
