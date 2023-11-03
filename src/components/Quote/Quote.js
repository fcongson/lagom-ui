import { clsx } from "clsx";
import React from "react";

import "./Quote.css";

export const Quote = ({ children, className, ...restProps }) => (
  <blockquote className={clsx("lagom-quote", className)} {...restProps}>
    {children}
  </blockquote>
);
