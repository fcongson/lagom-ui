import { clsx } from "clsx";
import React from "react";

import "./Container.css";

export const Container = ({
  children,
  className,
  marginNone,
  ...restProps
}) => {
  return (
    <div
      className={clsx(
        "lagom-container",
        className,
        marginNone && "lagom-container--margin-none"
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
