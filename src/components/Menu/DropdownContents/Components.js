import styled from '@emotion/styled'

export const DropdownEl = styled.div`
  width: auto;

  a {
    color: var(--white);
    text-decoration: none;
  }
`

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : '1rem')};
  color: ${({ color }) => (color ? `var(--${color})` : 'var(--blue)')};
`

export const HeadingLink = Heading.withComponent('li')

export const LinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    margin: 1rem 0.5rem;
    padding: 0 0.5rem;
    list-style: none;
    position: relative;

    a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      top: 0px;
      height: auto;
      right: -5px;
      bottom: 0px;
      left: auto;
      border-right: 2px solid #fff;
      transform: none;
      background: none;
    }
  }

  li:last-of-type,
  li:last-of-type a::after {
    margin-left: 0;
    border-right: none;
  }

  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
  background: var(--menu-background);
`
