import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useIntl, FormattedMessage, changeLocale } from "gatsby-plugin-intl";

import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";

const SiteHeader = styled.header`
  padding: 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) => theme.colors.bg};
    }
  }
`;

export const ToggleDarkMode = styled.button`
  cursor: pointer;
  height: 33px;
  width: 33px;
  border-radius: 50%;
  border: none;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  /* color: ${(props) => props.theme.pageBackground}; */
  &:focus {
    outline: none;
  }
  transition: all 1s ease;
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) => theme.colors.front}!important;
  border-color: ${({ dark, theme }) => theme.colors.front}!important;
`;

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
      @media ${device.lg} {
        color: ${({ dark, theme }) => theme.colors.front}!important;
        transition: 0.4s;
        align-items: center;
        display: inline-flex;
        font-size: 15px;
        font-weight: 700;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;

        &.language-picker {
          padding-right: 0px !important;
        }

        text-transform: lowercase;

        &.dropdown-toggle:after {
          margin-left: 10px;
          position: relative;
          transform: rotate(90deg);
          top: 1px;
          content: "\\ea06";
          border: none;
          font-family: "Grayic";
          font-size: 24px;
          transition: 0.4s;
          font-weight: 900;
          line-height: 14px;
        }
      }
    }
    &.nav-item:hover > .nav-link,
    &.nav-item.active > .nav-link {
      color: ${({ theme }) => theme.colors.primary} !important;
      &:after {
        transform: rotate(-90deg);
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          right: 0;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

// const MenuDropdown = styled.ul`
//   list-style: none;
//   @media ${device.lg} {
//     top: 110%;
//     position: absolute;
//     min-width: 227px;
//     max-width: 227px;
//     box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);

//     background-color: ${({ dark, theme }) => theme.colors.light};
//     padding: 15px 0px;
//     z-index: 99;
//     opacity: 0;
//     transition: opacity 0.4s, top 0.4s;
//     pointer-events: none;
//     left: -90%;
//     border: 1px solid #e5e5e5;
//     border-radius: 0 0 10px 10px;
//     display: block;
//     border-top: ${({ theme }) => `3px solid ${theme.colors.primary}`};
//   }
//   > .drop-menu-item {
//     color: ${({ theme }) => theme.colors.dark};
//     font-size: 15px;
//     font-weight: 300;
//     letter-spacing: -0.5px;
//     padding-left: 30px;
//     padding-right: 30px;
//     padding-top: 10px;
//     padding-bottom: 10px;

//     a {
//       color: ${({ theme }) => theme.colors.dark} !important;
//       transition: all 0.3s ease-out;
//       position: relative;
//       display: flex;
//       align-items: center;
//       font-weight: 700;
//       text-transform: lowercase;
//       &.dropdown-toggle::after {
//         margin-left: 10px;
//         position: relative;
//         top: 1px;
//         content: "\\ea06";
//         border: none;
//         font-family: "Grayic";
//         font-size: 24px;
//         transition: 0.4s;
//         font-weight: 900;
//         line-height: 14px;
//       }
//     }

//     &:hover,
//     &.active {
//       > a {
//         color: ${({ theme }) => theme.colors.primary} !important;
//         text-decoration: none;
//         &::after {
//           transform: rotate(180deg);
//         }
//       }
//     }
//     &.dropdown {
//       position: relative;

//       &:hover {
//         > .menu-dropdown {
//           @media ${device.lg} {
//             top: 10px;
//             opacity: 1;
//             pointer-events: visible;
//             transform: translateX(-100%);
//           }
//         }
//       }
//       > .menu-dropdown {
//         border-top-color: ${({ theme }) => theme.colors.success};
//         @media ${device.lg} {
//           top: 10px;
//           left: 0%;
//           opacity: 0;
//           transform: translateX(-110%);
//           transition: 0.4s;
//           pointer-events: none;
//         }
//         > .drop-menu-item {
//           @media ${device.lg} {
//             padding-left: 30px;
//             padding-right: 30px;
//           }
//         }
//       }
//     }
//   }
//   &.dropdown-right {
//     left: auto;
//     right: -90%;
//   }
// `;

const LanguagePicker = styled.div`
  & {
    text-align: right;
    font-weight: bold;
    position: relative;
  }
  & .selected-lang {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.3em;
    background-color: #efefef;
    height: 33px;
    width: 33px;
    margin-top: -5px;
    border-radius: 50%;
    span {
      height: 25px;
    }
  }

  & ul {
    margin: 0;
    padding: 0;
    display: none;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 30px;
    right: -50%;
    width: 115px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  }

  & ul li {
    list-style: none;
  }

  & ul li button {
    text-decoration: none;
    width: 115px;
    padding: 5px 10px;
    display: block;
    background: none;
    border: none;
  }

  & ul li:hover {
    background-color: #f2f2f2;
  }

  &:hover ul {
    display: block;
  }
`;

export const getFlagEmoji = (countryCode) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );

const Header = ({ isDark }) => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const intl = useIntl();

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : ""
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid>
          <nav className="navbar px-0 px-md-3 site-navbar offcanvas-active navbar-expand-lg navbar-light">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo color={isDark ? "light" : "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                >
                  {/* Open about modal */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleAbout();
                      }}
                    >
                      <FormattedMessage id="nav_about" />
                    </a>
                  </li>

                  {/* Blog Link */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://blog.larsbehrenberg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FormattedMessage id="nav_blog" />
                    </a>
                  </li>

                  {/* Open contact modal */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleContact();
                      }}
                    >
                      <FormattedMessage id="nav_contact" />
                    </a>
                  </li>

                  <li>
                    <span className="nav-link language-picker">
                      <LanguagePicker className="lang-menu">
                        <div className="selected-lang">
                          <span>
                            {getFlagEmoji(intl.formatMessage({ id: "flag" }))}
                          </span>
                        </div>
                        <ul>
                          <li>
                            <button
                              className="de"
                              onClick={() => changeLocale("de")}
                            >
                              {getFlagEmoji("DE")} German
                            </button>
                          </li>
                          <li>
                            <button
                              className="en"
                              onClick={() => changeLocale("en")}
                            >
                              {getFlagEmoji("GB")} English
                            </button>
                          </li>
                          <li>
                            <button
                              href=""
                              className="fr"
                              onClick={() => changeLocale("ja")}
                            >
                              {getFlagEmoji("JP")} Japanese
                            </button>
                          </li>
                        </ul>
                      </LanguagePicker>
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" style={{ marginTop: "-5px" }}>
                      <ToggleDarkMode
                        onClick={() =>
                          isDark
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
                        {isDark ? <CgSun size={20} /> : <HiMoon size={20} />}
                      </ToggleDarkMode>
                    </span>
                  </li>
                </Menu>
              </div>
            </div>

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={isDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu />
      </Offcanvas>
    </>
  );
};
export default Header;
