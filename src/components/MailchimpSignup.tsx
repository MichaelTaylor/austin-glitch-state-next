"use client"

import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

const MailchimpSignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email === '' || firstName === '') {
      alert('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }

    axios.post('/api/EmailSignup', {
      email,
      firstName,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);
      if (response.data.title === 'Member Exists') {
        alert('You are already subscribed');
      }
    }).catch((error) => {
      console.error(error);
    });

    setSubmitted(true);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const formBoxStyle = "w-2/6 mx-auto border-4 border-text-color font-custom"
  const headerStyle = "text-center bg-primary text-text-color p-5 text-5xl underline"
  const formStyle = "flex flex-col m-auto max-w-lg py-4 items-center w-2/5"
  const inputStyle = "w-auto p-5 my-1 block bg-primary border-4 border-text-color text-3xl placeholder-text-color"
  const buttonStyle = "w-full p-5 my-1 block bg-primary border-4 border-text-color text-3xl placeholder-text-color mt-10 rounded-3xl"

  const unsubmittedForm = (
    <div>
      <h1 className= {headerStyle}>Stay updated, join our newsletter!</h1>
      <form className={formStyle} onSubmit={handleSubmit}>
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="firstName"
          id="first-name"
          placeholder="Enter your first name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <button className={buttonStyle} type="submit">
          Subscribe
        </button>
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