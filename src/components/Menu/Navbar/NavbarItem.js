import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import LocalizedLink from '../../LocalizedLink'

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

  svg:hover {
    svg,
    path,
    g,
    polygon {
      fill: grey;
    }
  }

  svg,
  path {
    fill: white;
    transition: fill ease-out 100ms;
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
        title !== '問い合わせ' &&
        title !== 'Languages' ? (
          link == 'https://blog.larsbehrenberg.com' ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            <NavbarItemTitle to={link}>{title}</NavbarItemTitle>
          )
        ) : title === 'Languages' ? (
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="26px"
            height="26px"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <polygon points="138.71,137 132.29,137 120.293,197 150.707,197 		" />
              </g>
            </g>
            <g>
              <g>
                <path d="M381.374,257c6.477,17.399,15.092,31.483,24.626,43.467c9.534-11.984,19.149-26.069,25.626-43.467H381.374z" />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M467,91H280.717l38.842,311.679c0.687,12.748-2.798,24.75-11.118,34.146L242.663,512H467c24.814,0,45-20.186,45-45V137
			C512,112.186,491.814,91,467,91z M467,257h-4.006c-8.535,27.383-22.07,48.81-36.136,65.702
			c11.019,10.074,22.802,18.338,34.517,27.594c6.46,5.171,7.515,14.604,2.329,21.079c-5.162,6.465-14.632,7.513-21.079,2.329
			c-12.729-10.047-24.677-18.457-36.625-29.421c-11.948,10.964-22.896,19.374-35.625,29.421c-6.447,5.184-15.917,4.136-21.079-2.329
			c-5.186-6.475-4.131-15.908,2.329-21.079c11.715-9.256,22.498-17.52,33.517-27.594c-14.066-16.891-26.602-38.318-35.136-65.702
			H346c-8.291,0-15-6.709-15-15s6.709-15,15-15h45v-15c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15v15h46c8.291,0,15,6.709,15,15
			S475.291,257,467,257z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M244.164,39.419C241.366,16.948,222.162,0,199.516,0H45C20.186,0,0,20.186,0,45v332c0,24.814,20.186,45,45,45
			c89.67,0,154.177,0,236.551,0c4.376-5.002,8.044-8.134,8.199-14.663C289.788,405.7,244.367,41.043,244.164,39.419z
			 M183.944,286.707c-7.954,1.637-16.011-3.527-17.651-11.763L156.706,227h-42.411l-9.587,47.944
			c-1.611,8.115-9.434,13.447-17.651,11.763c-8.115-1.626-13.389-9.521-11.763-17.651l29.999-150
			C106.699,112.054,112.852,107,120,107h31c7.148,0,13.301,5.054,14.707,12.056l30,150
			C197.333,277.186,192.06,285.081,183.944,286.707z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M175.261,452l2.574,20.581c1.716,13.783,10.874,27.838,25.938,34.856c28.428-31.294,11.229-12.362,50.359-55.437H175.261z
			"
                />
              </g>
            </g>
          </svg>
        ) : (
          <a className="mailtoui" href="mailto:info@larsbehrenberg.com">
            {title}
          </a>
        )}

        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
