import Details from '@/components/details/Details';
import LandingPage from '@/components/LandingPage';
import NextEvent from '@/components/next-event/NextEvent';
import MailchimpSignupForm from '@/components/MailchimpSignup';
import React from 'react'
import ImageGallery from '@/components/image-gallery/ImageGallery';

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <LandingPage/>
        <ImageGallery/>
        <NextEvent />
        <MailchimpSignupForm/>
        <Details/>
      </div>
    </main>
  );
}

export default Home