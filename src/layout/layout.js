/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import '../styles/layout.css';
import { Transition, Header, Footer } from 'layout';
import Particles from '../components/particles';

const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 1.0875rem 0rem;
  padding-top: 0;
`;

// const GatsbyLink = styled.a`
//   margin-left: 5px;
// `;

// const Footer = styled.footer`
//   display: flex;
//   justify-content: center;
//   margin-top: 3rem;
// `;

const BackgroundShadow = styled.div`
  background: linear-gradient(90deg, #1c3242 0%, rgba(28, 50, 66, 0.2) 100%);
  z-index: -9;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header siteTitle={'Behrenberg'} />
      <Content>
        <Transition location={location}>
          <main>{children}</main>
        </Transition>
        <Footer />
        {/* <Footer>
          <p>
            © {new Date().getFullYear()} Lars | Built with{' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </Footer> */}
      </Content>
      <BackgroundShadow />
      <Particles />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
