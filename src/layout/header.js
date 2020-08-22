import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo_white.png';

const SiteHeader = styled.header`
  background: transparent;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1.5rem 1.0875rem 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  * {
    margin-bottom: 0;
  }
`;

const NavLink = styled(Link)``;

const HomeLink = styled(NavLink)`
  margin-left: 0;
`;

const Menu = styled.p`
  text-align: center;
  line-height: 1.6em;

  a {
    margin-left: 2rem;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &.hire-link {
      padding-top: 3px;
      border-bottom: 2px solid #fff;

      :hover {
        border: none;
      }
    }

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
`;

const Header = () => {
  return (
    <SiteHeader>
      <Content>
        <Link to="/">
          <img
            src={Logo}
            alt="Behrenberg Webdevelopment"
            style={{ width: '60px' }}
          />
        </Link>
        <Menu>
          <HomeLink to="/">Home</HomeLink>
          <NavLink to="/latest-work">Latest Work</NavLink>
          {/* <NavLink to="/insights">Insights</NavLink> */}
          <NavLink to="/about">About</NavLink>
          <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
            Get In Touch
          </a>
        </Menu>

        <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
          Hire Me
        </a>
      </Content>
    </SiteHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
