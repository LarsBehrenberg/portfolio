import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../images/logo_white.png';

const Container = styled.div`
  text-align: center;
  margin-top: -3rem;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80vh;
`;

const NameHeader = styled.h1`
  font-size: 4rem;
  margin-bottom: 0;
  clear: both;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <img
            src={logo}
            alt="behrenbnerg"
            style={{
              width: '100px',
              marginBottom: '-10px',
              float: 'right',
            }}
          />
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          {/* <NameHeader>Behrenberg</NameHeader>
          <Description>Webdesign &amp; -development</Description> */}
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
};

export default LandingBio;
