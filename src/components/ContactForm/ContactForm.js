import React from "react";
import { Form } from "react-bootstrap";

import { Input, TextArea, Button, Text } from "../Core";

import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

const ContactForm = ({ theme = "dark", ...rest }) => {
  const intl = useIntl();

  const initialState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const [state, setState] = React.useState(initialState);
  const [successMessage, setSuccessMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    if (successMessage !== "") {
      setSuccessMessage("");
    }

    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setState(initialState))
      .then(() =>
        setSuccessMessage(intl.formatMessage({ id: "contact_form_success" }))
      )
      .catch(() =>
        setSuccessMessage(intl.formatMessage({ id: "contact_form_error" }))
      );
  };

  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/#"
      onSubmit={handleSubmit}
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <div className="mt-4">
        <Input
          type="text"
          placeholder={intl.formatMessage({ id: "contact_form_name" })}
          required
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <Input
          type="email"
          placeholder={intl.formatMessage({ id: "contact_form_email" })}
          required
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder={intl.formatMessage({ id: "contact_form_subject" })}
          required
          name="subject"
          value={state.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 ">
        <TextArea
          rows={4}
          placeholder={intl.formatMessage({ id: "contact_form_message" })}
          required
          value={state.message}
          name="message"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button arrowRight variant="primary" type="submit">
          <FormattedMessage id="contact_form_submit" />
        </Button>
      </div>
      <div className="mt-4 ">
        <Text
          color={`${successMessage.includes("successfully") ? "green" : "red"}`}
        >
          {successMessage}
        </Text>
      </div>
    </Form>
  );
};

export default ContactForm;
