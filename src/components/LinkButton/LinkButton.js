import { clsx } from "clsx";
import React from "react";
import { Button } from "../Button/Button.js";

import "./LinkButton.css";

export const LinkButton = ({
  children,
  className,
  to,
  Component,
  ...restProps
}) =>
  !!Component ? (
    <Component className={clsx(`lagom-link-button`, className)} to={to}>
      <Button {...restProps}>{children}</Button>
    </Component>
  ) : (
    <a className={clsx(`lagom-link-button`, className)} href={to}>
      <Button {...restProps}>{children}</Button>
    </a>
  );
