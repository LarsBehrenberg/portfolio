import React from "react";
import { Title } from "../Core";
import { FormattedMessage, Link } from "gatsby-plugin-intl";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
        <FormattedMessage id="nav_title" />
      </Title>
    </Link>
  );
};

export default Logo;
