import clsx from "clsx";
import "./Container.css";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
  /**
   * Removes the bottom margin
   */
  marginNone?: boolean;
}

/**
 * Primarily used as a child of `Section`. Provides a container for the section contents.
 */
export const Container: React.FunctionComponent<ContainerProps> = ({
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
        marginNone && "lagom-container--margin-none",
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
