"use client"

import React from "react";
import Card from "@/components/shared/reusable-components/Card";

const SignUp: React.FC = () => {
  return (
    <Card>
      <div className="flex justify-center items-center mt-10">
        <iframe
          title="google form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScbGzdYKfcu79jg1qW7Ike1hgLK9R5LFbp_NzcL9Pw6FjtW8g/viewform?embedded=true"
          width="800"
          height="1600"
        >
          Loading…
        </iframe>
      </div>
    </Card>
  );
};

export default SignUp;