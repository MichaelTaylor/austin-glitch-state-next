import React from 'react'

interface ButtonProps {
    className?: string;
    buttonText: string;
    type? : "submit" | "reset" | "button";
    onclick?: () => void;
}

const buttonStyle = `w-4/5 mx-auto p-5 my-1 block bg-primary border-4 border-text-color 
  text-3xl placeholder-text-color mt-10 rounded-3xl hover:bg-text-color hover:text-primary
  transition duration-100 ease-in-out transform hover:scale-105`

const Button : React.FC<ButtonProps> = ({className, buttonText, type, onclick}) => {
  return (
    <button className={`${buttonStyle} ${className}`} type={type} onClick={onclick}>
        {buttonText}
    </button>
  )
}

export default Button