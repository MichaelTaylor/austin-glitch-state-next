import React from 'react'

import LandingPage from '@/components/landing-page/LandingPage';
import IntroQuote from '@/components/intro-quote/IntroQuote';
import ImageGallery from '@/components/image-gallery/ImageGallery';
import AGSPitch from '@/components/ags-pitch/AGSPitch';
import TestimonialsList from '@/components/testimonial-list/TestimonialsList';
import NextEvent from '@/components/next-event/NextEvent';
import MailchimpSignupForm from '@/components/mailchimp-signup/MailchimpSignup';
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