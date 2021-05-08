import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-scroll";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Title, Button, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

// import HeroSVG from "../../assets/image/svg/app-shopping.svg";

const ImgRight = styled.div`
  max-width: 100%;
  width: 100%;
`;

export const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  const data = useStaticQuery(graphql`
    query HeroImage {
      file(name: { regex: "/hero_image/" }) {
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
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                >
                  <FormattedMessage id="hero_title" />
                </Text>
                <Title variant="hero">
                  <FormattedMessage id="hero_subtitle" />
                </Title>

                <Box mt="52px">
                  {/* <a
                    href="https://larsbehrenberg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      style={{ marginRight: "1rem", textTransform: "none" }}
                      variant="#7b113a"
                      arrowRight
                    >
                      <FormattedMessage id="hero_button_one" />
                    </Button>
                  </a> */}
                  <Button
                    arrowRight
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleContact();
                    }}
                  >
                    <FormattedMessage id="hero_button_two" />
                  </Button>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight>
                    <Img
                      fluid={fluidImage}
                      alt="hero image of Lars Behrenberg"
                    />
                  </ImgRight>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
