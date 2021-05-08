import { Link } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import { Box, Title } from "../Core";

const Footer = ({ isDark = true }) => {
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box
        bg="bg"
        pt={[0, null, null, "3.75rem"]}
        pb="3.75rem"
        className="position-relative"
      >
        <Container>
          <div
            css={`
              font-size: 1rem;
              max-width: 170px;
              margin: 0 auto 1rem;
              display: flex;
              justify-content: space-between;
              z-index: 100;
            `}
          >
            <Link to="/imprint">Imprint</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="text-center">
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem;
              `}
              className="text-uppercase"
            >
              © {new Date().getFullYear()} All rights reserved
            </Title>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
