import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import React, { ReactNode } from 'react'

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <main>
      <div>
        <Header/>
        <LandingPage/>
        <Details/>
        <Footer/>
      </div>
    </main>
  );
}

export default Home