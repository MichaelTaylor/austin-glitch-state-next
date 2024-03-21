import React from "react";

const Footer = () => {
  return (
    <div className="text-center w-full h-10 bg-black text-white text-3xl lg:text-6xl font-custom">
      Austin Glitch State ©{new Date().getFullYear()}
    </div>
  );
};

export default Footer;