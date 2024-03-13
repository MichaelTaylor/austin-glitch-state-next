import React, { ReactNode } from "react";
import DetailBlock from "@/components/DetailBlock"
import { FAQ } from "@/components/data/FAQ";
import { FAQCollection } from "../types/faq-types";

import Card from "@/components/Card"
import NextEvent from "@/components/NextEvent";


const Details: React.FC = () => {
  const faqList: ReactNode = FAQ.map((QnA: FAQCollection, index: number) => (
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