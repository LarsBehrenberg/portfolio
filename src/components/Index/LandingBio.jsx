import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Subtitle, NameHeader, ButtonContainer, Button } from '../Common'

const OuterContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  min-height: 60vh;

  > * {
    width: 50%;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`

const TextContainer = styled.div`
  max-width: 600px;
  margin: auto 0;
`

const MockupContainer = styled.div`
  margin: auto 0;

  @media screen and (max-width: 850px) {
    margin: 3rem 0 1rem;
  }

  // The genius codepen i got this macbook css from : https://codepen.io/asraven/pen/eJREQv
  .macbook {
    padding: 4% 6%;
    margin: 0 auto;
    width: 90%;
    height: 52%;
    max-width: 800px;
    max-height: 423px;
  }

  .screen {
    background: #000;
    border-radius: 3% 3% 0.5% 0.5% / 5%;
    margin: 0 auto;
    /* for aspect ratio */
    position: relative;
    width: 80%;
  }

  .screen:before {
    border: 2px solid #cacacc;
    border-radius: 3% 3% 0.5% 0.5% / 5%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8) inset,
      0 0 1px 2px rgba(255, 255, 255, 0.3) inset;
    content: '';
    display: block;
    /* for aspect ratio ~67:100 */
    padding-top: 67%;
  }

  .screen:after {
    content: '';
    border-top: 2px solid rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: 0.75%;
    left: 0.5%;
    padding-top: 1%;
    width: 99%;
  }

  .viewport {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: 4.3% 3.2%;
    background: #333;
  }

  .base {
    /* for aspect ratio */
    position: relative;
    width: 100%;
  }

  .base:before {
    content: '';
    display: block;
    /* for aspect ratio ~33:1000*/
    padding-top: 3.3%;
    /* stylin */
    background: linear-gradient(
      #eaeced,
      #edeef0 55%,
      #fff 55%,
      #8a8b8f 56%,
      #999ba0 61%,
      #4b4b4f 84%,
      #262627 89%,
      rgba(0, 0, 0, 0.01) 98%
    );
    border-radius: 0 0 10% 10%/ 0 0 50% 50%;
  }

  .base::after {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.8) 0.5%,
      rgba(0, 0, 0, 0.4) 3.3%,
      transparent 15%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 85%,
      rgba(0, 0, 0, 0.4) 96.7%,
      rgba(255, 255, 255, 0.8) 99.5%,
      rgba(0, 0, 0, 0.5) 100%
    );
    content: '';
    height: 53%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .notch {
    background: #ddd;
    border-radius: 0 0 7% 7% / 0 0 95% 95%;
    box-shadow: -5px -1px 3px rgba(0, 0, 0, 0.2) inset,
      5px -1px 3px rgba(0, 0, 0, 0.2) inset;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3.5%;
    z-index: 2;
    /* for aspect ratio */
    position: relative;
    width: 14%;
  }

  .notch:before {
    content: '';
    display: block;
    /* for aspect ratio ~1:10 */
    padding-top: 10%;
  }

  /* Screenshot Hover Scroll Additions
-------------------------------------------------------------- */

  .macbook .viewport {
    transition: background-position 3s ease;
    background-size: 100% 100%;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }

  .macbook .viewport:after {
    background: radial-gradient(
      circle at right bottom,
      transparent 75%,
      rgba(255, 255, 255, 0.05) 75%,
      transparent
    );
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const LandingBio = ({ title, subtitle, intro, buttons, images }) => (
  <OuterContainer>
    <TextContainer>
      <Subtitle>{subtitle}</Subtitle>
      <NameHeader>{title}</NameHeader>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      <ButtonContainer>
        <Button to="/latest-work" type="GatsbyLink">
          {buttons[0]}
        </Button>
        <Button type="MailToUi" href="mailto:info@larsbehrenberg.com">
          {buttons[1]}
        </Button>
      </ButtonContainer>
    </TextContainer>
    <MockupContainer>
      <Link to="/latest-work" className="macbook">
        <div className="screen">
          <div
            className="viewport"
            style={{
              backgroundImage: `url("https://larsbehrenberg.com/${images[0].image.localFile.childImageSharp.fluid.originalImg}")`,
            }}
          ></div>
        </div>
        <div className="base"></div>
        <div className="notch"></div>
      </Link>
    </MockupContainer>
  </OuterContainer>
)

export default LandingBio
