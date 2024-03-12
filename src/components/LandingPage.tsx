import React from 'react'
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="flex justify-center">
      <Image src="/AGS_Logo.gif" alt="AGS Logo" height={400} width={400}/>
    </div>
  );
}

export default LandingPage