import Details from '@/components/details/Details';
import LandingPage from '@/components/LandingPage';
import NextEvent from '@/components/next-event/NextEvent';
import MailchimpSignupForm from '@/components/MailchimpSignup';
import React from 'react'

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <LandingPage/>
        <NextEvent />
        <MailchimpSignupForm/>
        <Details/>
      </div>
    </main>
  );
}

export default Home