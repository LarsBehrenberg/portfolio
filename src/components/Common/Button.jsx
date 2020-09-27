import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const LinkStyles = css`
  border: 2px solid #fff;
  padding: 0.3rem 1rem;
  background: none;
  color: #fff;
  text-decoration: none;

  /* Transform button on hover with svg */
  span {
    display: inline-block;
    position: relative;
    transition: all 300ms ease-out;
    will-change: transform;
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
  &:hover {
    span {
      transform: translate3d(-0.5rem, 0, 0);
    }
    svg {
      opacity: 1;
      right: -1.5rem;
    }
  }
`

const StyledLink = styled(Link)`
  ${LinkStyles}
`
const ContactLink = styled.a`
  ${LinkStyles}
`

const Arrow = () => (
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
)

const Button = ({ children, to, type = 'GatsbyLink' }) => {
  if (type === 'GatsbyLink') {
    return (
      <StyledLink to={to}>
        <span>
          {children}
          <Arrow />
        </span>
      </StyledLink>
    )
  }

  return (
    <ContactLink className="mailtoui" href="mailto:info@larsbehrenberg.com">
      <span>
        {children}
        <Arrow />
      </span>
    </ContactLink>
  )
}

export default Button
