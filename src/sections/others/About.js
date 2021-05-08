import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";

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

const About = ({ hero = true, bg = "dark", ...rest }) => {
  const data = useStaticQuery(graphql`
    query AboutImage {
      file(name: { regex: "/profile-about/" }) {
        id
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const fluidImage = data.file.childImageSharp.fluid;

  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                {/* <img
                  src={imgPhoto}
                  alt="folio"
                  className="img-fluid"
                  style={{ maxWidth: "500px", width: "100%" }}
                  width="600"
                /> */}
                <Img
                  fluid={fluidImage}
                  alt="An image of Lars Behrenberg"
                  className="img-fluid"
                  style={{
                    maxWidth: "400px",
                    width: "100%",
                    margin: "0 auto",
                  }}
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  <FormattedMessage id="about_name" />
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  <FormattedMessage id="about_description_one" />
                </Text>
                <Text
                  color="light"
                  className="mt-4"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  <FormattedMessage id="about_description_two" />
                </Text>
                <div className="mt-4">
                  <Text color="light">
                    <FormattedMessage id="about_email" />
                  </Text>

                  <Text variant="p">
                    <a
                      href="mailto:hello@larsbehrenberg.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">hello@larsbehrenberg.com</Span>
                    </a>
                  </Text>
                </div>
                {/* <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div> */}
                <Text color="light" className="mt-3 font-weight-bold">
                  <FormattedMessage id="about_name" />
                </Text>
                {/* <Text color="light" variant="small">
                  <FormattedMessage id="about_company" />
                </Text> */}
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.linkedin.com/in/lars-behrenberg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    LinkedIn
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.xing.com/profile/Lars_Behrenberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Xing
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
