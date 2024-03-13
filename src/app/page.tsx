import Details from '@/components/details/Details';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import NextEvent from '@/components/next-event/NextEvent';
import MailchimpSignupForm from '@/components/MailchimpSignup';
import React, { ReactNode } from 'react'

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
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