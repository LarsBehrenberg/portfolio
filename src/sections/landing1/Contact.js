import React, { useContext } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability
                title={<FormattedMessage id="lets_talk_subtitle" />}
              />
              <div className="text-center my-5">
                <Title>
                  <FormattedMessage id="lets_talk_title" />
                </Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  <FormattedMessage id="lets_talk_button" />
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
