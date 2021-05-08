import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box } from "../components/Core";

import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: contain;
    z-index: -1;
  }

  li {
    list-style: circle;
    margin-left: 20px;
    padding-left: 0px;
    a {
      cursor: pointer;
    }
  }

  h2 {
    margin: 2rem 0 1rem !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.heading} !important;
  }
`;

const ImprintPage = () => {
  return (
    <PageWrapper>
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="12" className="mb-5 mb-lg-0">
              <Box>
                <Title mb={4} color="heading" className="">
                  Imprint
                </Title>
                <div>
                  <h2>Angaben gem&auml;&szlig; &sect; 5 TMG:</h2>
                  <p>
                    <strong>
                      Deutschland:
                      <br />
                    </strong>
                    Lars Behrenberg
                    <br />
                    48291 Telgte, NRW
                  </p>
                  <p>
                    <strong>Japan:</strong>
                    <br />
                    Lars Behrenberg
                    <br />
                    Hara-mura, Suwa
                    <br />
                    Nagano-ken
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>Kontakt</h2>
                  <p>E-Mail: info@larsbehrenberg.com</p>
                  <h2>
                    Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2
                    RStV:
                  </h2>
                  <p>
                    Lars Behrenberg
                    <br />
                    Lilly-Reich-Stra&szlig;e 2<br />
                    48291 Telgte
                  </p>
                  <h2>Haftung f&uuml;r Inhalte</h2>
                  <p>
                    Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1
                    TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis
                    10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, &uuml;bermittelte oder gespeicherte fremde
                    Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
                    forschen, die auf eine rechtswidrige T&auml;tigkeit
                    hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                    unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                  </p>
                  <h2>Haftung f&uuml;r Links</h2>
                  <p>
                    Unser Angebot enth&auml;lt Links zu externen Webseiten
                    Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch
                    keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder
                    Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                    wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                    Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                    ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend
                    entfernen.
                  </p>
                  <h2>Urheberrecht</h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede
                    Art der Verwertung au&szlig;erhalb der Grenzen des
                    Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung
                    des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                    dieser Seite sind nur f&uuml;r den privaten, nicht
                    kommerziellen Gebrauch gestattet.
                  </p>
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                  </p>
                </div>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </PageWrapper>
  );
};

export default ImprintPage;
