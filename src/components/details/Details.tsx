import React, { ReactNode } from "react";
import DetailBlock from "@/components/details/DetailBlock"
import { FAQ } from "@/components/data/FAQ";
import { FAQCollection } from "../../types/faq-types";

import Card from "@/components/shared/reusable-components/Card"


const Details: React.FC = () => {
  const faqList: ReactNode = FAQ.map((QnA: FAQCollection, index: number) => (
    <DetailBlock key={index} header={QnA.header} details={QnA.details} />
  ));

  const detailStyle = `flex flex-col mx-auto max-w-5xl text-center 
  mt-2 pb-18 bg-background text-text-color`

  return (
    <React.Fragment>
      <Card className="mt-16">
        <div className={detailStyle}>
          {faqList}
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Details;