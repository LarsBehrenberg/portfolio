import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  <FormattedMessage id="contact_title" />
                </Title>
                <Text color="light" mb="2.75rem">
                  <FormattedMessage id="contact_description" />
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5">
                <div>
                  <Text color="light">
                    <FormattedMessage id="about_email" />
                  </Text>

                  <a
                    href="mailto:hello@larsbehrenberg.com"
                    className="font-weight-bold"
                  >
                    <Span color="primary">hello@larsbehrenberg.com</Span>
                  </a>
                </div>
                <div className="mt-5">
                  <Text color="light">
                    <FormattedMessage id="contact_socials" />
                  </Text>

                  <div className="mt-1 d-flex">
                    <LinkSocial
                      href="https://www.linkedin.com/in/lars-behrenberg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-3 text-primary"
                    >
                      LinkedIn
                    </LinkSocial>
                    <LinkSocial
                      href="https://www.xing.com/profile/Lars_Behrenberg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mr-3 text-primary"
                    >
                      Xing
                    </LinkSocial>
                  </div>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
