import { clsx } from "clsx";
import React from "react";

import "./PageHeader.css";

export const PageHeader = ({ children, className, color, ...restProps }) => {
  return (
    <h1
      className={clsx("lagom-page-header", className)}
      style={{ color }}
      {...restProps}
    >
      {children}
    </h1>
  );
};
