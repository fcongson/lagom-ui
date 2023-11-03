import { clsx } from "clsx";
import React from "react";

import "./Button.css";

export const Button = ({
  children,
  className,
  primary = false,
  ...restProps
}) => (
  <button
    className={clsx(
      "lagom-button",
      className,
      primary ? "lagom-button--primary" : "lagom-button--secondary"
    )}
    {...restProps}
  >
    {children}
  </button>
);
