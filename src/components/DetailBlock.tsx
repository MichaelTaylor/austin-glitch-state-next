import React from "react";
import QuestionAnswer from "@/components/QuestionAnswer"

//todo rename these details -> detailBlock -> questionAnswer

interface DetailBlockProps {
  header: string;
  details: { question: string; answer: string }[];
}

const DetailBlock: React.FC<DetailBlockProps> = ({ header, details }) => {
  const questionAndAnswers = details.map((QnA, index) => (
    <QuestionAnswer key={index} question={QnA.question} answer={QnA.answer} />
  ));

  return (
    <div className="p-10 bg-primary shadow-md rounded-lg font-custom">
      <h1 className="font-bold mb-4 text-7xl">{header}</h1>
      {questionAndAnswers}
    </div>
  );
};

export default DetailBlock;