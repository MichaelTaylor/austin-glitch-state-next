import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface UseEmailSubscribe {
  email: string;
  setEmail: (value: string) => void;
  firstName: string;
  setFirstName: (value: string) => void;
  submitted: boolean;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

export function useEmailSubscribe(): UseEmailSubscribe {
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

    axios.post('/api/email-subscribe', {
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

  return {
    email,
    setEmail,
    firstName,
    setFirstName,
    submitted,
    handleSubmit,
  };
}