import { clsx } from "clsx";
import React from "react";

import "./SectionHeader.css";

export const SectionHeader = ({ children, className, color, ...restProps }) => {
  return (
    <h2
      className={clsx("lagom-section-header", className)}
      style={{ color }}
      {...restProps}
    >
      {children}
    </h2>
  );
};
