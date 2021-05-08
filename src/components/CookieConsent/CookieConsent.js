import React from "react";
import styled from "styled-components";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";

import { default as ReactCookieConsent } from "react-cookie-consent";

const StyledCookieConsent = styled(ReactCookieConsent).attrs(({ theme }) => ({
  style: {
    backgroundColor: theme.colors.bg,
    color: theme.colors.text,
  },
  buttonStyle: {
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    background: theme.colors.text,
    color: theme.colors.bg,
    boxShadow: "0 32px 54px rgb(3 3 3 / 12%)",
  },
  declineButtonStyle: {
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    background: theme.colors.shadow,
    color: theme.colors.text,
    boxShadow: "0 32px 54px rgb(3 3 3 / 12%)",
  },
}))`
  background-color: #fff !important;
`;

const CookieConsent = () => {
  const intl = useIntl();

  return (
    <StyledCookieConsent
      location="bottom"
      // flipButtons
      buttonText={intl.formatMessage({ id: "cookie_accept" })}
      enableDeclineButton
      declineButtonText={intl.formatMessage({ id: "cookie_decline" })}
      cookieName="gatsby-gdpr-google-analytics"
    >
      <FormattedMessage id="cookie_message" />
    </StyledCookieConsent>
  );
};

export default CookieConsent;
