import React from 'react'

import LandingPage from '@/components/LandingPage';
import IntroQuote from '@/components/IntroQuote';
import ImageGallery from '@/components/image-gallery/ImageGallery';
import AGSPitch from '@/components/AGSPitch';
import TestimonialsList from '@/components/TestimonialsList';
import NextEvent from '@/components/next-event/NextEvent';
import MailchimpSignupForm from '@/components/MailchimpSignup';
import Details from '@/components/details/Details';

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <LandingPage/>
        <IntroQuote/>
        <ImageGallery/>
        <AGSPitch/>
        <TestimonialsList/>
        <NextEvent />
        <MailchimpSignupForm/>
        <Details/>
      </div>
    </main>
  );
}

export default Home