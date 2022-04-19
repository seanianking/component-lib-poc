import React from "react";

export interface LogoProps {
  brand: string;
}

const LogoImage = (props: LogoProps) => {
  return <span>{props.brand}</span>;
};

export default LogoImage;