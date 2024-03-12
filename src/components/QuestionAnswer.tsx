import React from "react";

interface QuestionAnswerProps {
  question: string;
  answer: string;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => {
  return (
    <div className="text-text-color">
      <h1 className="underline text-5xl mb-2">{question}</h1>
      <h3 className="text-4xl mb-4">{answer}</h3>
    </div>
  );
};

export default QuestionAnswer;