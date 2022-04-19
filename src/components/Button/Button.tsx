import React from "react";

export interface ButtonProps {
  label: string;
  brand: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;