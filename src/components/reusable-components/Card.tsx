import React, { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {

    const cardStyle = `bg-secondary`
  const classLists = `${cardStyle} ${props.className}`;

  return <div className={classLists}>{props.children}</div>;
};

export default Card;