import React from "react";

import PageWrapper from "../components/PageWrapper";
import { SectionStyled } from "../sections/landing1/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box } from "../components/Core";

const NotFoundPage = () => {
  return (
    <>
      <PageWrapper>
        <SectionStyled>
          <Container>
            <Row className="align-items-center">
              <Col className="mt-5 pt-5 mb-lg-0">
                <Box>
                  <Title variant="hero" className="text-center">
                    404 | Page Not Found
                  </Title>
                </Box>
              </Col>
            </Row>
          </Container>
        </SectionStyled>
      </PageWrapper>
    </>
  );
};
export default NotFoundPage;
