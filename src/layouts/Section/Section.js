import { clsx } from "clsx";
import React from "react";

import "./Section.css";

export const Section = ({
  children,
  className,
  backgroundColor,
  ...restProps
}) => {
  return (
    <section
      className={clsx(
        "lagom-section",
        className,
        !!backgroundColor && "lagom-section--background-color"
      )}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
