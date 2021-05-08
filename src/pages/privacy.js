import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box, Text } from "../components/Core";

import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";
import { Element, Link } from "react-scroll";

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

const ScrollLink = styled(Link).attrs((props) => ({
  spy: true,
  smooth: true,
  offset: -100,
  duration: 1000,
}))``;

const PrivacyPage = () => {
  return (
    <PageWrapper>
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="12" className="mb-5 mb-lg-0">
              <Box>
                <Title mb={4} color="heading" className="">
                  Privacy Policy
                </Title>
                <Text>
                  <h2>Datenschutzerkl&auml;rung</h2>
                  <h2>Einleitung</h2>
                  <p>
                    Mit der folgenden Datenschutzerkl&auml;rung m&ouml;chten wir
                    Sie dar&uuml;ber aufkl&auml;ren, welche Arten Ihrer
                    personenbezogenen Daten (nachfolgend auch kurz als
                    &quot;Daten&ldquo; bezeichnet) wir zu welchen Zwecken und in
                    welchem Umfang verarbeiten. Die Datenschutzerkl&auml;rung
                    gilt f&uuml;r alle von uns durchgef&uuml;hrten
                    Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
                    Erbringung unserer Leistungen als auch insbesondere auf
                    unseren Webseiten, in mobilen Applikationen sowie innerhalb
                    externer Onlinepr&auml;senzen, wie z.B. unserer
                    Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
                    als &quot;Onlineangebot&ldquo;).
                  </p>
                  <p>
                    Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                  </p>
                  <p>Stand: 15. September 2020</p>
                  <h2>Inhalts&uuml;bersicht</h2>
                  <ul>
                    <li>
                      <p>
                        <ScrollLink to="verantwortlicher">
                          Verantwortlicher
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="verarbeitungen">
                          &Uuml;bersicht der Verarbeitungen
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="rechtsgrundlagen">
                          Ma&szlig;gebliche Rechtsgrundlagen
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="sicherheit">
                          Sicherheitsma&szlig;nahmen
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="daten">
                          &Uuml;bermittlung und Offenbarung von
                          personenbezogenen Daten
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="datenverarbeitung">
                          Datenverarbeitung in Drittl&auml;ndern
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="cookies">
                          Einsatz von Cookies
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="hosting">
                          Bereitstellung des Onlineangebotes und Webhosting
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="kontakt">Kontaktaufnahme</ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="webanalyse">
                          Webanalyse, Monitoring und Optimierung
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="netzwerke">
                          Pr&auml;senzen in sozialen Netzwerken (Social Media)
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="loeschung">
                          L&ouml;schung von Daten
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="aktualisierung">
                          &Auml;nderung und Aktualisierung der
                          Datenschutzerkl&auml;rung
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="rechte">
                          Rechte der betroffenen Personen
                        </ScrollLink>
                      </p>
                    </li>
                    <li>
                      <p>
                        <ScrollLink to="begriffsdefinitionen">
                          Begriffsdefinitionen
                        </ScrollLink>
                      </p>
                    </li>
                  </ul>
                  <Element name="verantwortlicher">
                    <h2>Verantwortlicher</h2>
                  </Element>
                  <p>
                    Lars Behrenberg
                    <br />
                    Lilly-Reich-Stra&szlig;e 2<br />
                    48291 Telgte, NRW
                    <br />
                    Deutschland
                  </p>
                  <p>
                    <strong>E-Mail-Adresse:</strong>{" "}
                    <a href="mailto:info@larsbehrenberg.com">
                      info@larsbehrenberg.com
                    </a>
                  </p>

                  <Element name="verarbeitungen">
                    <h2>&Uuml;bersicht der Verarbeitungen</h2>
                  </Element>
                  <p>
                    Die nachfolgende &Uuml;bersicht fasst die Arten der
                    verarbeiteten Daten und die Zwecke ihrer Verarbeitung
                    zusammen und verweist auf die betroffenen Personen.
                  </p>
                  <h3>Arten der verarbeiteten Daten</h3>
                  <ul>
                    <li>
                      <p>Bestandsdaten (z.B. Namen, Adressen).</p>
                    </li>
                    <li>
                      <p>
                        Inhaltsdaten &nbsp;(z.B. Texteingaben, Fotografien,
                        Videos).
                      </p>
                    </li>
                    <li>
                      <p>Kontaktdaten (z.B. E-Mail, Telefonnummern).</p>
                    </li>
                    <li>
                      <p>
                        Meta-/Kommunikationsdaten (z.B.
                        Ger&auml;te-Informationen, IP-Adressen).
                      </p>
                    </li>
                    <li>
                      <p>
                        Nutzungsdaten &nbsp;(z.B. besuchte Webseiten, Interesse
                        an Inhalten, Zugriffszeiten).
                      </p>
                    </li>
                  </ul>
                  <h3>Kategorien betroffener Personen</h3>
                  <ul>
                    <li>
                      <p>Kommunikationspartner.</p>
                    </li>
                    <li>
                      <p>
                        Nutzer (z.B. Webseitenbesucher, Nutzer von
                        Onlinediensten).
                      </p>
                    </li>
                  </ul>
                  <h3>Zwecke der Verarbeitung</h3>
                  <ul>
                    <li>
                      <p>Besuchsaktionsauswertung.</p>
                    </li>
                    <li>
                      <p>Kontaktanfragen und Kommunikation.</p>
                    </li>
                    <li>
                      <p>Profiling (Erstellen von Nutzerprofilen).</p>
                    </li>
                    <li>
                      <p>Remarketing.</p>
                    </li>
                    <li>
                      <p>
                        Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                        wiederkehrender Besucher).
                      </p>
                    </li>
                    <li>
                      <p>
                        Tracking (z.B. interessens-/verhaltensbezogenes
                        Profiling, Nutzung von Cookies).
                      </p>
                    </li>
                  </ul>
                  <Element name="rechtsgrundlagen">
                    <h2>Ma&szlig;gebliche Rechtsgrundlagen</h2>
                  </Element>
                  <p>
                    Im Folgenden teilen wir die Rechtsgrundlagen der
                    Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
                    personenbezogenen Daten verarbeiten, mit. Bitte beachten
                    Sie, dass zus&auml;tzlich zu den Regelungen der DSGVO die
                    nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn-
                    und Sitzland gelten k&ouml;nnen. Sollten ferner im
                    Einzelfall speziellere Rechtsgrundlagen ma&szlig;geblich
                    sein, teilen wir Ihnen diese in der
                    Datenschutzerkl&auml;rung mit.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)
                        </strong>{" "}
                        - Die betroffene Person hat ihre Einwilligung in die
                        Verarbeitung der sie betreffenden personenbezogenen
                        Daten f&uuml;r einen spezifischen Zweck oder mehrere
                        bestimmte Zwecke gegeben.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Vertragserf&uuml;llung und vorvertragliche Anfragen
                          (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)
                        </strong>{" "}
                        - Die Verarbeitung ist f&uuml;r die Erf&uuml;llung eines
                        Vertrags, dessen Vertragspartei die betroffene Person
                        ist, oder zur Durchf&uuml;hrung vorvertraglicher
                        Ma&szlig;nahmen erforderlich, die auf Anfrage der
                        betroffenen Person erfolgen.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
                          DSGVO)
                        </strong>{" "}
                        - Die Verarbeitung ist zur Wahrung der berechtigten
                        Interessen des Verantwortlichen oder eines Dritten
                        erforderlich, sofern nicht die Interessen oder
                        Grundrechte und Grundfreiheiten der betroffenen Person,
                        die den Schutz personenbezogener Daten erfordern,
                        &uuml;berwiegen.
                      </p>
                    </li>
                  </ul>

                  <Element name="sicherheit">
                    <h2>Sicherheitsma&szlig;nahmen</h2>
                  </Element>
                  <p>
                    Wir treffen nach Ma&szlig;gabe der gesetzlichen Vorgaben
                    unter Ber&uuml;cksichtigung des Stands der Technik, der
                    Implementierungskosten und der Art, des Umfangs, der
                    Umst&auml;nde und der Zwecke der Verarbeitung sowie der
                    unterschiedlichen Eintrittswahrscheinlichkeiten und des
                    Ausma&szlig;es der Bedrohung der Rechte und Freiheiten
                    nat&uuml;rlicher Personen geeignete technische und
                    organisatorische Ma&szlig;nahmen, um ein dem Risiko
                    angemessenes Schutzniveau zu gew&auml;hrleisten.
                  </p>
                  <p>
                    Zu den Ma&szlig;nahmen geh&ouml;ren insbesondere die
                    Sicherung der Vertraulichkeit, Integrit&auml;t und
                    Verf&uuml;gbarkeit von Daten durch Kontrolle des physischen
                    und elektronischen Zugangs zu den Daten als auch des sie
                    betreffenden Zugriffs, der Eingabe, der Weitergabe, der
                    Sicherung der Verf&uuml;gbarkeit und ihrer Trennung. Des
                    Weiteren haben wir Verfahren eingerichtet, die eine
                    Wahrnehmung von Betroffenenrechten, die L&ouml;schung von
                    Daten und Reaktionen auf die Gef&auml;hrdung der Daten
                    gew&auml;hrleisten. Ferner ber&uuml;cksichtigen wir den
                    Schutz personenbezogener Daten bereits bei der Entwicklung
                    bzw. Auswahl von Hardware, Software sowie Verfahren
                    entsprechend dem Prinzip des Datenschutzes, durch
                    Technikgestaltung und durch datenschutzfreundliche
                    Voreinstellungen.
                  </p>

                  <Element name="daten">
                    <h2>
                      &Uuml;bermittlung und Offenbarung von personenbezogenen
                      Daten
                    </h2>
                  </Element>
                  <p>
                    Im Rahmen unserer Verarbeitung von personenbezogenen Daten
                    kommt es vor, dass die Daten an andere Stellen, Unternehmen,
                    rechtlich selbstst&auml;ndige Organisationseinheiten oder
                    Personen &uuml;bermittelt oder sie ihnen gegen&uuml;ber
                    offengelegt werden. Zu den Empf&auml;ngern dieser Daten
                    k&ouml;nnen z.B. Zahlungsinstitute im Rahmen von
                    Zahlungsvorg&auml;ngen, mit IT-Aufgaben beauftragte
                    Dienstleister oder Anbieter von Diensten und Inhalten, die
                    in eine Webseite eingebunden werden, geh&ouml;ren. In
                    solchen Fall beachten wir die gesetzlichen Vorgaben und
                    schlie&szlig;en insbesondere entsprechende Vertr&auml;ge
                    bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit
                    den Empf&auml;ngern Ihrer Daten ab.
                  </p>

                  <Element name="datenverarbeitung">
                    <h2>Datenverarbeitung in Drittl&auml;ndern</h2>
                  </Element>
                  <p>
                    Sofern wir Daten in einem Drittland (d.h., au&szlig;erhalb
                    der Europ&auml;ischen Union (EU), des Europ&auml;ischen
                    Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im
                    Rahmen der Inanspruchnahme von Diensten Dritter oder der
                    Offenlegung bzw. &Uuml;bermittlung von Daten an andere
                    Personen, Stellen oder Unternehmen stattfindet, erfolgt dies
                    nur im Einklang mit den gesetzlichen Vorgaben.&nbsp;
                  </p>
                  <p>
                    Vorbehaltlich ausdr&uuml;cklicher Einwilligung oder
                    vertraglich oder gesetzlich erforderlicher &Uuml;bermittlung
                    verarbeiten oder lassen wir die Daten nur in
                    Drittl&auml;ndern mit einem anerkannten Datenschutzniveau,
                    vertraglichen Verpflichtung durch sogenannte
                    Standardschutzklauseln der EU-Kommission, beim Vorliegen von
                    Zertifizierungen oder verbindlicher internen
                    Datenschutzvorschriften verarbeiten &nbsp;(Art. 44 bis 49
                    DSGVO, Informationsseite der EU-Kommission:{" "}
                    <a
                      href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
                    </a>
                    ).
                  </p>
                  <Element name="cookies">
                    <h2>Einsatz von Cookies</h2>
                  </Element>
                  <p>
                    Cookies sind Textdateien, die Daten von besuchten Websites
                    oder Domains enthalten und von einem Browser auf dem
                    Computer des Benutzers gespeichert werden. Ein Cookie dient
                    in erster Linie dazu, die Informationen &uuml;ber einen
                    Benutzer w&auml;hrend oder nach seinem Besuch innerhalb
                    eines Onlineangebotes zu speichern. Zu den gespeicherten
                    Angaben k&ouml;nnen z.B. die Spracheinstellungen auf einer
                    Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an
                    der ein Video geschaut wurde, geh&ouml;ren. Zu dem Begriff
                    der Cookies z&auml;hlen wir ferner andere Technologien, die
                    die gleichen Funktionen wie Cookies erf&uuml;llen (z.B.,
                    wenn Angaben der Nutzer anhand pseudonymer
                    Onlinekennzeichnungen gespeichert werden, auch als
                    &quot;Nutzer-IDs&quot; bezeichnet)
                  </p>
                  <p>
                    <strong>
                      Die folgenden Cookie-Typen und Funktionen werden
                      unterschieden:
                    </strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          Tempor&auml;re Cookies (auch: Session- oder
                          Sitzungs-Cookies):
                        </strong>{" "}
                        Tempor&auml;re Cookies werden sp&auml;testens
                        gel&ouml;scht, nachdem ein Nutzer ein Online-Angebot
                        verlassen und seinen Browser geschlossen hat.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Permanente Cookies:</strong> Permanente Cookies
                        bleiben auch nach dem Schlie&szlig;en des Browsers
                        gespeichert. So kann beispielsweise der Login-Status
                        gespeichert oder bevorzugte Inhalte direkt angezeigt
                        werden, wenn der Nutzer eine Website erneut besucht.
                        Ebenso k&ouml;nnen die Interessen von Nutzern, die zur
                        Reichweitenmessung oder zu Marketingzwecken verwendet
                        werden, in einem solchen Cookie gespeichert werden.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>First-Party-Cookies:</strong>{" "}
                        First-Party-Cookies werden von uns selbst gesetzt.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Third-Party-Cookies (auch: Drittanbieter-Cookies)
                        </strong>
                        : Drittanbieter-Cookies werden haupts&auml;chlich von
                        Werbetreibenden (sog. Dritten) verwendet, um
                        Benutzerinformationen zu verarbeiten.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Notwendige (auch: essentielle oder unbedingt
                          erforderliche) Cookies:
                        </strong>{" "}
                        Cookies k&ouml;nnen zum einen f&uuml;r den Betrieb einer
                        Webseite unbedingt erforderlich sein (z.B. um Logins
                        oder andere Nutzereingaben zu speichern oder aus
                        Gr&uuml;nden der Sicherheit).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Statistik-, Marketing- und Personalisierungs-Cookies
                        </strong>
                        : Ferner werden Cookies im Regelfall auch im Rahmen der
                        Reichweitenmessung eingesetzt sowie dann, wenn die
                        Interessen eines Nutzers oder sein Verhalten (z.B.
                        Betrachten bestimmter Inhalte, Nutzen von Funktionen
                        etc.) auf einzelnen Webseiten in einem Nutzerprofil
                        gespeichert werden. Solche Profile dienen dazu, den
                        Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen
                        Interessen entsprechen. Dieses Verfahren wird auch als
                        &quot;Tracking&quot;, d.h., Nachverfolgung der
                        potentiellen Interessen der Nutzer bezeichnet. Soweit
                        wir Cookies oder &quot;Tracking&quot;-Technologien
                        einsetzen, informieren wir Sie gesondert in unserer
                        Datenschutzerkl&auml;rung oder im Rahmen der Einholung
                        einer Einwilligung.
                      </p>
                    </li>
                  </ul>
                  <p>
                    <strong>Hinweise zu Rechtsgrundlagen:&nbsp;</strong> Auf
                    welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mit
                    Hilfe von Cookies verarbeiten, h&auml;ngt davon ab, ob wir
                    Sie um eine Einwilligung bitten. Falls dies zutrifft und Sie
                    in die Nutzung von Cookies einwilligen, ist die
                    Rechtsgrundlage der Verarbeitung Ihrer Daten die
                    erkl&auml;rte Einwilligung. Andernfalls werden die mithilfe
                    von Cookies verarbeiteten Daten auf Grundlage unserer
                    berechtigten Interessen (z.B. an einem
                    betriebswirtschaftlichen Betrieb unseres Onlineangebotes und
                    dessen Verbesserung) verarbeitet oder, wenn der Einsatz von
                    Cookies erforderlich ist, um unsere vertraglichen
                    Verpflichtungen zu erf&uuml;llen.
                  </p>
                  <p>
                    <strong>Speicherdauer:&nbsp;</strong>Sofern wir Ihnen keine
                    expliziten Angaben zur Speicherdauer von permanenten Cookies
                    mitteilen (z. B. im Rahmen eines sog. Cookie-Opt-Ins), gehen
                    Sie bitte davon aus, dass die Speicherdauer bis zu zwei
                    Jahre betragen kann.
                  </p>
                  <p>
                    <strong>
                      Allgemeine Hinweise zum Widerruf und Widerspruch
                      (Opt-Out):&nbsp;
                    </strong>{" "}
                    Abh&auml;ngig davon, ob die Verarbeitung auf Grundlage einer
                    Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie
                    jederzeit die M&ouml;glichkeit, eine erteilte Einwilligung
                    zu widerrufen oder der Verarbeitung Ihrer Daten durch
                    Cookie-Technologien zu widersprechen (zusammenfassend als
                    &quot;Opt-Out&quot; bezeichnet). Sie k&ouml;nnen Ihren
                    Widerspruch zun&auml;chst mittels der Einstellungen Ihres
                    Browsers erkl&auml;ren, z.B., indem Sie die Nutzung von
                    Cookies deaktivieren (wobei hierdurch auch die
                    Funktionsf&auml;higkeit unseres Onlineangebotes
                    eingeschr&auml;nkt werden kann). Ein Widerspruch gegen den
                    Einsatz von Cookies zu Zwecken des Onlinemarketings kann
                    auch mittels einer Vielzahl von Diensten, vor allem im Fall
                    des Trackings, &uuml;ber die Webseiten{" "}
                    <a
                      href="https://optout.aboutads.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://optout.aboutads.info
                    </a>{" "}
                    und{" "}
                    <a
                      href="https://www.youronlinechoices.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.youronlinechoices.com/
                    </a>{" "}
                    erkl&auml;rt werden. Daneben k&ouml;nnen Sie weitere
                    Widerspruchshinweise im Rahmen der Angaben zu den
                    eingesetzten Dienstleistern und Cookies erhalten.
                  </p>
                  <p>
                    <strong>
                      Verarbeitung von Cookie-Daten auf Grundlage einer
                      Einwilligung
                    </strong>
                    : Bevor wir Daten im Rahmen der Nutzung von Cookies
                    verarbeiten oder verarbeiten lassen, bitten wir die Nutzer
                    um eine jederzeit widerrufbare Einwilligung. Bevor die
                    Einwilligung nicht ausgesprochen wurde, werden allenfalls
                    Cookies eingesetzt, die f&uuml;r den Betrieb unseres
                    Onlineangebotes unbedingt erforderlich sind.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten
                        &nbsp;(z.B. besuchte Webseiten, Interesse an Inhalten,
                        Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
                        Ger&auml;te-Informationen, IP-Adressen).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Betroffene Personen:</strong> Nutzer (z.B.
                        Webseitenbesucher, Nutzer von Onlinediensten).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6
                        Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art.
                        6 Abs. 1 S. 1 lit. f. DSGVO).
                      </p>
                    </li>
                  </ul>

                  <Element name="hosting">
                    <h2>Bereitstellung des Onlineangebotes und Webhosting</h2>
                  </Element>
                  <p>
                    Um unser Onlineangebot sicher und effizient bereitstellen zu
                    k&ouml;nnen, nehmen wir die Leistungen von einem oder
                    mehreren Webhosting-Anbietern in Anspruch, von deren Servern
                    (bzw. von ihnen verwalteten Servern) das Onlineangebot
                    abgerufen werden kann. Zu diesen Zwecken k&ouml;nnen wir
                    Infrastruktur- und Plattformdienstleistungen,
                    Rechenkapazit&auml;t, Speicherplatz und Datenbankdienste
                    sowie Sicherheitsleistungen und technische
                    Wartungsleistungen in Anspruch nehmen.
                  </p>
                  <p>
                    Zu den im Rahmen der Bereitstellung des Hostingangebotes
                    verarbeiteten Daten k&ouml;nnen alle die Nutzer unseres
                    Onlineangebotes betreffenden Angaben geh&ouml;ren, die im
                    Rahmen der Nutzung und der Kommunikation anfallen. Hierzu
                    geh&ouml;ren regelm&auml;&szlig;ig die IP-Adresse, die
                    notwendig ist, um die Inhalte von Onlineangeboten an Browser
                    ausliefern zu k&ouml;nnen, und alle innerhalb unseres
                    Onlineangebotes oder von Webseiten get&auml;tigten Eingaben.
                  </p>
                  <p>
                    <strong>Erhebung von Zugriffsdaten und Logfiles</strong>:
                    Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu
                    jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu
                    den Serverlogfiles k&ouml;nnen die Adresse und Name der
                    abgerufenen Webseiten und Dateien, Datum und Uhrzeit des
                    Abrufs, &uuml;bertragene Datenmengen, Meldung &uuml;ber
                    erfolgreichen Abruf, Browsertyp nebst Version, das
                    Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
                    Seite) und im Regelfall IP-Adressen und der anfragende
                    Provider geh&ouml;ren.
                  </p>
                  <p>
                    Die Serverlogfiles k&ouml;nnen zum einen zu Zwecken der
                    Sicherheit eingesetzt werden, z.B., um eine &Uuml;berlastung
                    der Server zu vermeiden (insbesondere im Fall von
                    missbr&auml;uchlichen Angriffen, sogenannten DDoS-Attacken)
                    und zum anderen, um die Auslastung der Server und ihre
                    Stabilit&auml;t sicherzustellen.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten
                        &nbsp;(z.B. Texteingaben, Fotografien, Videos),
                        Nutzungsdaten &nbsp;(z.B. besuchte Webseiten, Interesse
                        an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
                        (z.B. Ger&auml;te-Informationen, IP-Adressen).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Betroffene Personen:</strong> Nutzer (z.B.
                        Webseitenbesucher, Nutzer von Onlinediensten).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Rechtsgrundlagen:</strong> Berechtigte
                        Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                      </p>
                    </li>
                  </ul>

                  <Element name="kontakt">
                    <h2>Kontaktaufnahme</h2>
                  </Element>
                  <p>
                    Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular,
                    E-Mail, Telefon oder via soziale Medien) werden die Angaben
                    der anfragenden Personen verarbeitet, soweit dies zur
                    Beantwortung der Kontaktanfragen und etwaiger angefragter
                    Ma&szlig;nahmen erforderlich ist.
                  </p>
                  <p>
                    Die Beantwortung der Kontaktanfragen im Rahmen von
                    vertraglichen oder vorvertraglichen Beziehungen erfolgt zur
                    Erf&uuml;llung unserer vertraglichen Pflichten oder zur
                    Beantwortung von (vor)vertraglichen Anfragen und im
                    &Uuml;brigen auf Grundlage der berechtigten Interessen an
                    der Beantwortung der Anfragen.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten
                        (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
                        Telefonnummern), Inhaltsdaten &nbsp;(z.B. Texteingaben,
                        Fotografien, Videos).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Betroffene Personen:</strong>{" "}
                        Kommunikationspartner.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Zwecke der Verarbeitung:</strong>{" "}
                        Kontaktanfragen und Kommunikation.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Rechtsgrundlagen:</strong>{" "}
                        Vertragserf&uuml;llung und vorvertragliche Anfragen
                        (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte
                        Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                      </p>
                    </li>
                  </ul>

                  <Element name="webanalyse">
                    <h2>Webanalyse, Monitoring und Optimierung</h2>
                  </Element>
                  <p>
                    Die Webanalyse (auch als &quot;Reichweitenmessung&quot;
                    bezeichnet) dient der Auswertung der Besucherstr&ouml;me
                    unseres Onlineangebotes und kann Verhalten, Interessen oder
                    demographische Informationen zu den Besuchern, wie z.B. das
                    Alter oder das Geschlecht, als pseudonyme Werte umfassen.
                    Mit Hilfe der Reichweitenanalyse k&ouml;nnen wir z.B.
                    erkennen, zu welcher Zeit unser Onlineangebot oder dessen
                    Funktionen oder Inhalte am h&auml;ufigsten genutzt werden
                    oder zur Wiederverwendung einladen. Ebenso k&ouml;nnen wir
                    nachvollziehen, welche Bereiche der Optimierung
                    bed&uuml;rfen.&nbsp;
                  </p>
                  <p>
                    Neben der Webanalyse k&ouml;nnen wir auch Testverfahren
                    einsetzen, um z.B. unterschiedliche Versionen unseres
                    Onlineangebotes oder seiner Bestandteile zu testen und
                    optimieren.
                  </p>
                  <p>
                    Zu diesen Zwecken k&ouml;nnen sogenannte Nutzerprofile
                    angelegt und in einer Datei (sogenannte &quot;Cookie&quot;)
                    gespeichert oder &auml;hnliche Verfahren mit dem gleichen
                    Zweck genutzt werden. Zu diesen Angaben k&ouml;nnen z.B.
                    betrachtete Inhalte, besuchte Webseiten und dort genutzte
                    Elemente und technische Angaben, wie der verwendete Browser,
                    das verwendete Computersystem sowie Angaben zu
                    Nutzungszeiten geh&ouml;ren. Sofern Nutzer in die Erhebung
                    ihrer Standortdaten eingewilligt haben, k&ouml;nnen je nach
                    Anbieter auch diese verarbeitet werden.
                  </p>
                  <p>
                    Es werden ebenfalls die IP-Adressen der Nutzer gespeichert.
                    Jedoch nutzen wir ein IP-Masking-Verfahren (d.h.,
                    Pseudonymisierung durch K&uuml;rzung der IP-Adresse) zum
                    Schutz der Nutzer. Generell werden die im Rahmen von
                    Webanalyse, A/B-Testings und Optimierung keine Klardaten der
                    Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert,
                    sondern Pseudonyme. D.h., wir als auch die Anbieter der
                    eingesetzten Software kennen nicht die tats&auml;chliche
                    Identit&auml;t der Nutzer, sondern nur den f&uuml;r Zwecke
                    der jeweiligen Verfahren in deren Profilen gespeicherten
                    Angaben.
                  </p>
                  <p>
                    <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir
                    die Nutzer um deren Einwilligung in den Einsatz der
                    Drittanbieter bitten, ist die Rechtsgrundlage der
                    Verarbeitung von Daten die Einwilligung. Ansonsten werden
                    die Daten der Nutzer auf Grundlage unserer berechtigten
                    Interessen (d.h. Interesse an effizienten, wirtschaftlichen
                    und empf&auml;ngerfreundlichen Leistungen) verarbeitet. In
                    diesem Zusammenhang m&ouml;chten wir Sie auch auf die
                    Informationen zur Verwendung von Cookies in dieser
                    Datenschutzerkl&auml;rung hinweisen.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten
                        &nbsp;(z.B. besuchte Webseiten, Interesse an Inhalten,
                        Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
                        Ger&auml;te-Informationen, IP-Adressen).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Betroffene Personen:</strong> Nutzer (z.B.
                        Webseitenbesucher, Nutzer von Onlinediensten).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Zwecke der Verarbeitung:</strong>{" "}
                        Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                        wiederkehrender Besucher), Tracking (z.B.
                        interessens-/verhaltensbezogenes Profiling, Nutzung von
                        Cookies), Besuchsaktionsauswertung, Profiling (Erstellen
                        von Nutzerprofilen).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Sicherheitsma&szlig;nahmen:</strong> IP-Masking
                        (Pseudonymisierung der IP-Adresse).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6
                        Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art.
                        6 Abs. 1 S. 1 lit. f. DSGVO).
                      </p>
                    </li>
                  </ul>
                  <p>
                    <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Google Analytics:</strong> Reichweitenmessung
                        und Webanalyse; Dienstanbieter: Google Ireland Limited,
                        Gordon House, Barrow Street, Dublin 4, Irland,
                        Mutterunternehmen: Google LLC, 1600 Amphitheatre
                        Parkway, Mountain View, CA 94043, USA; Website:{" "}
                        <a
                          href="https://marketingplatform.google.com/intl/de/about/analytics/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://marketingplatform.google.com/intl/de/about/analytics/
                        </a>
                        ; Datenschutzerkl&auml;rung:{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://policies.google.com/privacy
                        </a>
                        .
                      </p>
                    </li>
                  </ul>
                  <Element name="netzwerke">
                    <h2>
                      Pr&auml;senzen in sozialen Netzwerken (Social Media)
                    </h2>
                  </Element>
                  <p>
                    Wir unterhalten Onlinepr&auml;senzen innerhalb sozialer
                    Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer,
                    um mit den dort aktiven Nutzern zu kommunizieren oder um
                    Informationen &uuml;ber uns anzubieten.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass dabei Daten der Nutzer
                    au&szlig;erhalb des Raumes der Europ&auml;ischen Union
                    verarbeitet werden k&ouml;nnen. Hierdurch k&ouml;nnen sich
                    f&uuml;r die Nutzer Risiken ergeben, weil so z.B. die
                    Durchsetzung der Rechte der Nutzer erschwert werden
                    k&ouml;nnte.
                  </p>
                  <p>
                    Ferner werden die Daten der Nutzer innerhalb sozialer
                    Netzwerke im Regelfall f&uuml;r Marktforschungs- und
                    Werbezwecke verarbeitet. So k&ouml;nnen z.B. anhand des
                    Nutzungsverhaltens und sich daraus ergebender Interessen der
                    Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile
                    k&ouml;nnen wiederum verwendet werden, um z.B. Werbeanzeigen
                    innerhalb und au&szlig;erhalb der Netzwerke zu schalten, die
                    mutma&szlig;lich den Interessen der Nutzer entsprechen. Zu
                    diesen Zwecken werden im Regelfall Cookies auf den Rechnern
                    der Nutzer gespeichert, in denen das Nutzungsverhalten und
                    die Interessen der Nutzer gespeichert werden. Ferner
                    k&ouml;nnen in den Nutzungsprofilen auch Daten
                    unabh&auml;ngig der von den Nutzern verwendeten Ger&auml;te
                    gespeichert werden (insbesondere, wenn die Nutzer Mitglieder
                    der jeweiligen Plattformen sind und bei diesen eingeloggt
                    sind).
                  </p>
                  <p>
                    F&uuml;r eine detaillierte Darstellung der jeweiligen
                    Verarbeitungsformen und der Widerspruchsm&ouml;glichkeiten
                    (Opt-Out) verweisen wir auf die Datenschutzerkl&auml;rungen
                    und Angaben der Betreiber der jeweiligen Netzwerke.
                  </p>
                  <p>
                    Auch im Fall von Auskunftsanfragen und der Geltendmachung
                    von Betroffenenrechten weisen wir darauf hin, dass diese am
                    effektivsten bei den Anbietern geltend gemacht werden
                    k&ouml;nnen. Nur die Anbieter haben jeweils Zugriff auf die
                    Daten der Nutzer und k&ouml;nnen direkt entsprechende
                    Ma&szlig;nahmen ergreifen und Ausk&uuml;nfte geben. Sollten
                    Sie dennoch Hilfe ben&ouml;tigen, dann k&ouml;nnen Sie sich
                    an uns wenden.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten
                        (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
                        Telefonnummern), Inhaltsdaten &nbsp;(z.B. Texteingaben,
                        Fotografien, Videos), Nutzungsdaten &nbsp;(z.B. besuchte
                        Webseiten, Interesse an Inhalten, Zugriffszeiten),
                        Meta-/Kommunikationsdaten (z.B.
                        Ger&auml;te-Informationen, IP-Adressen).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Betroffene Personen:</strong> Nutzer (z.B.
                        Webseitenbesucher, Nutzer von Onlinediensten).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Zwecke der Verarbeitung:</strong>{" "}
                        Kontaktanfragen und Kommunikation, Tracking (z.B.
                        interessens-/verhaltensbezogenes Profiling, Nutzung von
                        Cookies), Remarketing.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Rechtsgrundlagen:</strong> Berechtigte
                        Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                      </p>
                    </li>
                  </ul>
                  <p>
                    <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>LinkedIn:</strong> Soziales Netzwerk;
                        Dienstanbieter: LinkedIn Ireland Unlimited Company,
                        Wilton Place, Dublin 2, Irland; Website:{" "}
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.linkedin.com
                        </a>
                        ; Datenschutzerkl&auml;rung:{" "}
                        <a
                          href="https://www.linkedin.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.linkedin.com/legal/privacy-policy
                        </a>
                        ; Widerspruchsm&ouml;glichkeit (Opt-Out):{" "}
                        <a
                          href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Twitter:</strong> Soziales Netzwerk;
                        Dienstanbieter: Twitter Inc., 1355 Market Street, Suite
                        900, San Francisco, CA 94103, USA;
                        Datenschutzerkl&auml;rung:{" "}
                        <a
                          href="https://twitter.com/de/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://twitter.com/de/privacy
                        </a>
                        , (Einstellungen){" "}
                        <a
                          href="https://twitter.com/personalization"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://twitter.com/personalization
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Xing:</strong> Soziales Netzwerk;
                        Dienstanbieter: XING AG, Dammtorstra&szlig;e 29-32,
                        20354 Hamburg, Deutschland; Website:{" "}
                        <a
                          href="https://www.xing.de"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.xing.de
                        </a>
                        ; Datenschutzerkl&auml;rung:{" "}
                        <a
                          href="https://privacy.xing.com/de/datenschutzerklaerung"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://privacy.xing.com/de/datenschutzerklaerung
                        </a>
                        .
                      </p>
                    </li>
                  </ul>

                  <Element name="loeschung">
                    <h2>L&ouml;schung von Daten</h2>
                  </Element>
                  <p>
                    Die von uns verarbeiteten Daten werden nach Ma&szlig;gabe
                    der gesetzlichen Vorgaben gel&ouml;scht, sobald deren zur
                    Verarbeitung erlaubten Einwilligungen widerrufen werden oder
                    sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der
                    Verarbeitung dieser Daten entfallen ist oder sie f&uuml;r
                    den Zweck nicht erforderlich sind).
                  </p>
                  <p>
                    Sofern die Daten nicht gel&ouml;scht werden, weil sie
                    f&uuml;r andere und gesetzlich zul&auml;ssige Zwecke
                    erforderlich sind, wird deren Verarbeitung auf diese Zwecke
                    beschr&auml;nkt. D.h., die Daten werden gesperrt und nicht
                    f&uuml;r andere Zwecke verarbeitet. Das gilt z.B. f&uuml;r
                    Daten, die aus handels- oder steuerrechtlichen Gr&uuml;nden
                    aufbewahrt werden m&uuml;ssen oder deren Speicherung zur
                    Geltendmachung, Aus&uuml;bung oder Verteidigung von
                    Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer
                    anderen nat&uuml;rlichen oder juristischen Person
                    erforderlich ist.
                  </p>
                  <p>
                    Weitere Hinweise zu der L&ouml;schung von personenbezogenen
                    Daten k&ouml;nnen ferner im Rahmen der einzelnen
                    Datenschutzhinweise dieser Datenschutzerkl&auml;rung
                    erfolgen.
                  </p>

                  <Element name="aktualisierung">
                    <h2>
                      &Auml;nderung und Aktualisierung der
                      Datenschutzerkl&auml;rung
                    </h2>
                  </Element>
                  <p>
                    Wir bitten Sie, sich regelm&auml;&szlig;ig &uuml;ber den
                    Inhalt unserer Datenschutzerkl&auml;rung zu informieren. Wir
                    passen die Datenschutzerkl&auml;rung an, sobald die
                    &Auml;nderungen der von uns durchgef&uuml;hrten
                    Datenverarbeitungen dies erforderlich machen. Wir
                    informieren Sie, sobald durch die &Auml;nderungen eine
                    Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
                    sonstige individuelle Benachrichtigung erforderlich wird.
                  </p>
                  <p>
                    Sofern wir in dieser Datenschutzerkl&auml;rung Adressen und
                    Kontaktinformationen von Unternehmen und Organisationen
                    angeben, bitten wir zu beachten, dass die Adressen sich
                    &uuml;ber die Zeit &auml;ndern k&ouml;nnen und bitten die
                    Angaben vor Kontaktaufnahme zu pr&uuml;fen.
                  </p>

                  <Element name="rechte">
                    <h2>Rechte der betroffenen Personen</h2>
                  </Element>
                  <p>
                    Ihnen stehen als Betroffene nach der DSGVO verschiedene
                    Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO
                    ergeben:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          Widerspruchsrecht: Sie haben das Recht, aus
                          Gr&uuml;nden, die sich aus Ihrer besonderen Situation
                          ergeben, jederzeit gegen die Verarbeitung der Sie
                          betreffenden personenbezogenen Daten, die aufgrund von
                          Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch
                          einzulegen; dies gilt auch f&uuml;r ein auf diese
                          Bestimmungen gest&uuml;tztes Profiling. Werden die Sie
                          betreffenden personenbezogenen Daten verarbeitet, um
                          Direktwerbung zu betreiben, haben Sie das Recht,
                          jederzeit Widerspruch gegen die Verarbeitung der Sie
                          betreffenden personenbezogenen Daten zum Zwecke
                          derartiger Werbung einzulegen; dies gilt auch f&uuml;r
                          das Profiling, soweit es mit solcher Direktwerbung in
                          Verbindung steht.
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie
                        haben das Recht, erteilte Einwilligungen jederzeit zu
                        widerrufen.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Auskunftsrecht:</strong> Sie haben das Recht,
                        eine Best&auml;tigung dar&uuml;ber zu verlangen, ob
                        betreffende Daten verarbeitet werden und auf Auskunft
                        &uuml;ber diese Daten sowie auf weitere Informationen
                        und Kopie der Daten entsprechend den gesetzlichen
                        Vorgaben.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Recht auf Berichtigung:</strong> Sie haben
                        entsprechend den gesetzlichen Vorgaben das Recht, die
                        Vervollst&auml;ndigung der Sie betreffenden Daten oder
                        die Berichtigung der Sie betreffenden unrichtigen Daten
                        zu verlangen.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Recht auf L&ouml;schung und Einschr&auml;nkung der
                          Verarbeitung:
                        </strong>{" "}
                        Sie haben nach Ma&szlig;gabe der gesetzlichen Vorgaben
                        das Recht, zu verlangen, dass Sie betreffende Daten
                        unverz&uuml;glich gel&ouml;scht werden, bzw. alternativ
                        nach Ma&szlig;gabe der gesetzlichen Vorgaben eine
                        Einschr&auml;nkung der Verarbeitung der Daten zu
                        verlangen.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Recht auf Daten&uuml;bertragbarkeit:</strong>{" "}
                        Sie haben das Recht, Sie betreffende Daten, die Sie uns
                        bereitgestellt haben, nach Ma&szlig;gabe der
                        gesetzlichen Vorgaben in einem strukturierten,
                        g&auml;ngigen und maschinenlesbaren Format zu erhalten
                        oder deren &Uuml;bermittlung an einen anderen
                        Verantwortlichen zu fordern.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Beschwerde bei Aufsichtsbeh&ouml;rde:</strong>{" "}
                        Sie haben ferner nach Ma&szlig;gabe der gesetzlichen
                        Vorgaben das Recht, &nbsp;bei einer
                        Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat
                        Ihres gew&ouml;hnlichen Aufenthaltsorts, Ihres
                        Arbeitsplatzes oder des Orts des mutma&szlig;lichen
                        Versto&szlig;es Beschwerde einzulegen, wenn Sie der
                        Ansicht sind, dass die Verarbeitung der Sie betreffenden
                        personenbezogenen Daten gegen die DSGVO
                        verst&ouml;&szlig;t.
                      </p>
                    </li>
                  </ul>

                  <Element name="begriffsdefinitionen">
                    <h2>Begriffsdefinitionen</h2>
                  </Element>
                  <p>
                    In diesem Abschnitt erhalten Sie eine &Uuml;bersicht
                    &uuml;ber die in dieser Datenschutzerkl&auml;rung
                    verwendeten Begrifflichkeiten. Viele der Begriffe sind dem
                    Gesetz entnommen und vor allem im Art. 4 DSGVO definiert.
                    Die gesetzlichen Definitionen sind verbindlich. Die
                    nachfolgenden Erl&auml;uterungen sollen dagegen vor allem
                    dem Verst&auml;ndnis dienen. Die Begriffe sind alphabetisch
                    sortiert.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Besuchsaktionsauswertung:</strong>{" "}
                        &quot;Besuchsaktionsauswertung&quot; (englisch
                        &quot;Conversion Tracking&quot;) bezeichnet ein
                        Verfahren, mit dem die Wirksamkeit von
                        Marketingma&szlig;nahmen festgestellt werden kann. Dazu
                        wird im Regelfall ein Cookie auf den Ger&auml;ten der
                        Nutzer innerhalb der Webseiten, auf denen die
                        Marketingma&szlig;nahmen erfolgen, gespeichert und dann
                        erneut auf der Zielwebseite abgerufen. Beispielsweise
                        k&ouml;nnen wir so nachvollziehen, ob die von uns auf
                        anderen Webseiten geschalteten Anzeigen erfolgreich
                        waren).&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>IP-Masking:</strong> Als &quot;IP-Masking&rdquo;
                        wird eine Methode bezeichnet, bei der das letzte Oktett,
                        d.h., die letzten beiden Zahlen einer IP-Adresse,
                        gel&ouml;scht wird, damit die IP-Adresse nicht mehr der
                        eindeutigen Identifizierung einer Person dienen kann.
                        Daher ist das IP-Masking ein Mittel zur
                        Pseudonymisierung von Verarbeitungsverfahren,
                        insbesondere im Onlinemarketing&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Personenbezogene Daten:</strong>{" "}
                        &quot;Personenbezogene Daten&ldquo; sind alle
                        Informationen, die sich auf eine identifizierte oder
                        identifizierbare nat&uuml;rliche Person (im Folgenden
                        &quot;betroffene Person&ldquo;) beziehen; als
                        identifizierbar wird eine nat&uuml;rliche Person
                        angesehen, die direkt oder indirekt, insbesondere
                        mittels Zuordnung zu einer Kennung wie einem Namen, zu
                        einer Kennnummer, zu Standortdaten, zu einer
                        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
                        besonderen Merkmalen identifiziert werden kann, die
                        Ausdruck der physischen, physiologischen, genetischen,
                        psychischen, wirtschaftlichen, kulturellen oder sozialen
                        Identit&auml;t dieser nat&uuml;rlichen Person
                        sind.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Profiling:</strong> Als &quot;Profiling&ldquo;
                        wird jede Art der automatisierten Verarbeitung
                        personenbezogener Daten bezeichnet, die darin besteht,
                        dass diese personenbezogenen Daten verwendet werden, um
                        bestimmte pers&ouml;nliche Aspekte, die sich auf eine
                        nat&uuml;rliche Person beziehen (je nach Art des
                        Profilings geh&ouml;ren dazu Informationen betreffend
                        das Alter, das Geschlecht, Standortdaten und
                        Bewegungsdaten, Interaktion mit Webseiten und deren
                        Inhalten, Einkaufsverhalten, soziale Interaktionen mit
                        anderen Menschen) zu analysieren, zu bewerten oder, um
                        sie vorherzusagen (z.B. die Interessen an bestimmten
                        Inhalten oder Produkten, das Klickverhalten auf einer
                        Webseite oder den Aufenthaltsort). Zu Zwecken des
                        Profilings werden h&auml;ufig Cookies und Web-Beacons
                        eingesetzt.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Reichweitenmessung:</strong> Die
                        Reichweitenmessung (auch als Web Analytics bezeichnet)
                        dient der Auswertung der Besucherstr&ouml;me eines
                        Onlineangebotes und kann das Verhalten oder Interessen
                        der Besucher an bestimmten Informationen, wie z.B.
                        Inhalten von Webseiten, umfassen. Mit Hilfe der
                        Reichweitenanalyse k&ouml;nnen Webseiteninhaber z.B.
                        erkennen, zu welcher Zeit Besucher ihre Webseite
                        besuchen und f&uuml;r welche Inhalte sie sich
                        interessieren. Dadurch k&ouml;nnen sie z.B. die Inhalte
                        der Webseite besser an die Bed&uuml;rfnisse ihrer
                        Besucher anpassen. Zu Zwecken der Reichweitenanalyse
                        werden h&auml;ufig pseudonyme Cookies und Web-Beacons
                        eingesetzt, um wiederkehrende Besucher zu erkennen und
                        so genauere Analysen zur Nutzung eines Onlineangebotes
                        zu erhalten.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Remarketing:</strong> Vom
                        &quot;Remarketing&ldquo; bzw. &quot;Retargeting&ldquo;
                        spricht man, wenn z.B. zu Werbezwecken vermerkt wird,
                        f&uuml;r welche Produkte sich ein Nutzer auf einer
                        Webseite interessiert hat, um den Nutzer auf anderen
                        Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu
                        erinnern.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Tracking:</strong> Vom &quot;Tracking&ldquo;
                        spricht man, wenn das Verhalten von Nutzern &uuml;ber
                        mehrere Onlineangebote hinweg nachvollzogen werden kann.
                        Im Regelfall werden im Hinblick auf die genutzten
                        Onlineangebote Verhaltens- und Interessensinformationen
                        in Cookies oder auf Servern der Anbieter der
                        Trackingtechnologien gespeichert (sogenanntes
                        Profiling). Diese Informationen k&ouml;nnen
                        anschlie&szlig;end z.B. eingesetzt werden, um den
                        Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich
                        deren Interessen entsprechen.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Verantwortlicher:</strong> Als
                        &quot;Verantwortlicher&ldquo; wird die nat&uuml;rliche
                        oder juristische Person, Beh&ouml;rde, Einrichtung oder
                        andere Stelle, die allein oder gemeinsam mit anderen
                        &uuml;ber die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten entscheidet, bezeichnet.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Verarbeitung:</strong> &quot;Verarbeitung&quot;
                        ist jeder mit oder ohne Hilfe automatisierter Verfahren
                        ausgef&uuml;hrte Vorgang oder jede solche Vorgangsreihe
                        im Zusammenhang mit personenbezogenen Daten. Der Begriff
                        reicht weit und umfasst praktisch jeden Umgang mit
                        Daten, sei es das Erheben, das Auswerten, das Speichern,
                        das &Uuml;bermitteln oder das L&ouml;schen.&nbsp;
                      </p>
                    </li>
                  </ul>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </PageWrapper>
  );
};

export default PrivacyPage;
