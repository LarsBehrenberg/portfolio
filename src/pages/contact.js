import React from 'react';

import SEO from '../components/seo';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
`;

const Contact = ({ data }) => (
  <div>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>Contact</h1>
    </Container>
  </div>
);

export default Contact;
