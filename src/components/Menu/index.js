import React, { Component } from 'react'
import AnimatedNavbar from './AnimatedNavbar'
import styled from '@emotion/styled'

const AppContainer = styled.header`
  background: transparent;
  margin-bottom: 2rem;
`

class NavbarContainer extends Component {
  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.state.duration} lang={this.props.lang} />
      </AppContainer>
    )
  }
}

export default NavbarContainer
