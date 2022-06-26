import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "@/components/button";
// import style from "./comingSoon.module.css";

const ComingSoonNewsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  if (status === "success") {
    return <p className="">{message}</p>;
  }

  const handleSubmit = event => {
    event.preventDefault();
    email && onValidated({
      EMAIL: email
    });
  };

  const handleInput = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <form className="mb-20 flex flex-col md:flex-row md:h-[50px]" onSubmit={handleSubmit}>
      {status === "sending" && (
        <div className="">Sending...</div>
      )}

      {status === "error" && (
        <div
          className="text-sm font-mulish font-semibold text-system-error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <input id="email"
        className="h-full mb-7 px-5 py-3 md:w-[300px] md:mr-8"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter your email here"
        onChange={handleInput}
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
        className=""
        type="submit"
        name="submit"
        value="Sign Up"
      /> */}

      <Button variant="large" style="w-40 mx-auto">Sign Up!</Button>
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
