import React, { ReactNode } from "react";
import DetailBlock from "@/components/DetailBlock"
import { FAQ } from "@/components/data/FAQ";

import Card from "@/components/Card"
import NextEvent from "@/components/NextEvent";
//import LandingPage from "../Landing Page/LandingPage";
//import MailchimpSignupForm from "../Email Signup/MailchimpSignupForm";

const Details: React.FC = () => {
  const faqList: ReactNode = FAQ.map((QnA: FAQ, index: number) => (
    <DetailBlock key={index} header={QnA.header} details={QnA.details} />
  ));

  return (
    <React.Fragment>
      {/*<LandingPage />*/}
      <Card className="mt-16">
        <NextEvent />
        {/*<MailchimpSignupForm />*/}
        <div className="flex flex-col mx-auto max-w-5xl text-center mt-2 pb-18 bg-background text-text-color">{faqList}</div>
      </Card>
    </React.Fragment>
  );
};

export default Details;