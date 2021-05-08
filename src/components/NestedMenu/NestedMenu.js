import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";
import { FormattedMessage, changeLocale } from "gatsby-plugin-intl";
import { ToggleDarkMode, getFlagEmoji } from "../Header/Header";

import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const NestedMenuContainer = styled.div`
  a {
    /* color: ${({ theme }) => theme.colors.dark} !important; */
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: lowercase;

    &:hover,
    &:active {
      /* color: ${({ theme }) => theme.colors.primary}; */
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform: lowercase;
    /* color: ${({ theme }) => theme.colors.dark}; */
    background: ${({ dark, theme }) => theme.colors.bg} !important;

    &:hover,
    &:active,
    &.active {
      /* color: ${({ theme }) => theme.colors.dark}; */
      text-decoration: none;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const LanguagePicker = styled.div`
  > button {
    margin-right: 1rem;
    border: none;
    border-radius: 50%;
    padding: 0.3rem 0.4rem;
  }
`;

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link
              to={`/${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = () => {
  const gContext = useContext(GlobalContext);

  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {/* Open about modal */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                gContext.toggleAbout();
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              <FormattedMessage id="nav_about" />
            </a>
          }
        </ListGroup.Item>

        {/* Blog link */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <a
              href="https://blog.larsbehrenberg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="nav_blog" />
            </a>
          }
        </ListGroup.Item>

        {/* Open contact modal */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                gContext.toggleContact();
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              <FormattedMessage id="nav_contact" />
            </a>
          }
        </ListGroup.Item>

        {/* Set current Language & dark/light mode */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          <LanguagePicker>
            <button className="en" onClick={() => changeLocale("en")}>
              {getFlagEmoji("GB")}
            </button>
            <button className="de" onClick={() => changeLocale("de")}>
              {getFlagEmoji("DE")}
            </button>
            <button className="jp" onClick={() => changeLocale("ja")}>
              {getFlagEmoji("JP")}
            </button>
            <ToggleDarkMode
              onClick={() =>
                gContext.theme.headerDark
                  ? gContext.changeTheme({
                      bodyDark: false,
                      headerDark: false,
                      footerDark: false,
                    })
                  : gContext.changeTheme({
                      bodyDark: true,
                      headerDark: true,
                      footerDark: true,
                    })
              }
            >
              {gContext.theme.headerDark ? (
                <CgSun size={20} />
              ) : (
                <HiMoon size={20} />
              )}
            </ToggleDarkMode>
          </LanguagePicker>
        </ListGroup.Item>
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
