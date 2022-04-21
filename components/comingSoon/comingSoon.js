import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "@/components/button";
import style from "./comingSoon.module.css";

const ComingSoonNewsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  if (status === "success") {
    return <p className="c-subscribe-form-status__success">{message}</p>;
  }

  const handleSubmit = e => {
    e.preventDefault();
    email && onValidated({
      EMAIL: email
    });
  };

  return (
    <form className="c-subscribe-form flex" onSubmit={handleSubmit}>
      {status === "sending" && (
        <div className="c-subscribe-form-status__sending">Sending...</div>
      )}

      {status === "error" && (
        <div
          className="c-subscribe-form-status__error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <input id="email"
        className={["c-subscribe-form__input", "mr-5", style.input].join(" ")}
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter your email here"
        onChange={e => setEmail(e.target.value)}
        required
      />

      {/* <Input
        placeholder="Your@Email.com"
        type="email"
        name="email"
        label="email"
        autoComplete="email"
        onChange={e => setEmail(e.target.value)}
        errors={status === "error" ? [message] : []}
        required
      /> */}

      {/* <input id="submit"
        className="c-subscribe-form__submit"
        type="submit"
        name="submit"
        value="Sign Up"
      /> */}

      <Button variant="large">Sign Up!</Button>
    </form>
  );
};

function MailchimpFormContainer() {
  const postURL = `https://studio.us20.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={postURL}
      render={({ subscribe, status, message }) => (
        <ComingSoonNewsletter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpFormContainer;
