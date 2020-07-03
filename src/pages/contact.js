import React, { useState } from 'react';
import { navigate } from 'gatsby-link';

import SEO from '../components/seo';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXing } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  flex-grow: 1;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 3rem;
  }

  .hidden,
  label {
    display: none;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 1em;
    background: none;
    color: #ffffff;
    border: none;
    outline: none;
  }

  input {
    border-bottom: 2px solid white;
  }

  button {
    width: 200px;
  }
`;

const Info = styled.div`
  padding-right: 3rem;
  width: 40%;

  @media (max-width: 850px) {
    width: auto;
  }
`;

const IconContainer = styled.div`
  display: flex;

  > * {
    margin: 0 0.5em 0 0;
  }
`;

const Contact = ({ data }) => {
  const [state, setState] = useState({});

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then((data) => console.log(data))
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>Get In Touch</h1>
        <Wrapper>
          <Info>
            <h3 style={{ marginBottom: '0.5em' }}>Lars Behrenberg</h3>
            <p>
              <span style={{ fontWeight: '800' }}>Japan</span>
              <br />
              391-0115 Nagano, Suwa
              <br />
              Hara-mura
            </p>

            <p style={{ margin: '2em 0 0.5em 0' }}>
              <span style={{ fontWeight: '800' }}>Germany</span>
              <br />
              Telgte, 48291
              <br />
              Nordrhein-Westfalen
            </p>

            <p style={{ marginTop: '2em' }}>
              <a href="mailto:l.behrenberg@gmail.com">l.behrenberg@gmail.com</a>
              <br />
              <Link to="/">https://larsbehrenberg.com</Link>
            </p>
            <IconContainer>
              <IconContext.Provider
                value={{ color: '#ffffff90', size: '1.4em' }}
              >
                <a
                  href="https://www.linkedin.com/in/lars-behrenberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.xing.com/profile/Lars_Behrenberg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXing />
                </a>
                <a
                  href="https://github.com/LarsBehrenberg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a href="mailto:l.behrenberg@gmail.com">
                  <AiOutlineMail />
                </a>
              </IconContext.Provider>
            </IconContainer>
          </Info>
          <Form
            name="contact-us"
            method="POST"
            data-netlify="true"
            // data-netlify-recaptcha="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-us" />
            <p class="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <label>Name</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>
            {/* <div data-netlify-recaptcha="true"></div> */}
            <button type="submit">Send Message</button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Contact;
