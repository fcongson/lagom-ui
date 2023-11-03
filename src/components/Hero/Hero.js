import { clsx } from "clsx";
import React from "react";

import "./Hero.css";

export const Hero = ({ children, className, image, ...restProps }) => {
  return (
    <div className={clsx("lagom-hero", className)} {...restProps}>
      <div className="lagom-hero__image">{image}</div>
      <div className="lagom-hero__content">{children}</div>
    </div>
  );
};
