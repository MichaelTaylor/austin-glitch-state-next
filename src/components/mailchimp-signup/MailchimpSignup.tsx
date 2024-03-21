"use client"

import React, { ChangeEvent } from "react";
import { useEmailSubscribe } from "../shared/hooks/useEmailSubscribe";

import Button from "../shared/reusable-components/Button";

const MailchimpSignupForm: React.FC = () => {
  const { email, setEmail, firstName, 
    setFirstName, submitted, handleSubmit } = useEmailSubscribe();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const formBoxStyle = `w-4/6 xl:w-1/2 mx-auto border-4 border-text-color font-custom`
  const headerStyle = `text-center bg-primary text-text-color p-5 text-5xl underline`
  const formStyle = `flex flex-col w-4/5 mx-auto max-w-lg py-4 items-center w-2/5`
  const inputStyle = `w-full p-5 my-1 block bg-primary border-4 border-text-color 
  text-3xl placeholder-text-color`

  const unsubmittedForm = (
    <div>
      <h1 className= {headerStyle}>Stay updated, join our newsletter!</h1>
      <form className={formStyle} onSubmit={handleSubmit}>
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <Button className="w-full" buttonText="Subscribe" type="submit" />
      </form>
    </div>
  );

  const submittedForm = (
    <div>
      <h1 className={headerStyle}>Thank you for subscribing!</h1>
    </div>
  );

  return (
    <div className={formBoxStyle}>
      {!submitted ? unsubmittedForm : submittedForm}
    </div>
  );
};

export default MailchimpSignupForm;