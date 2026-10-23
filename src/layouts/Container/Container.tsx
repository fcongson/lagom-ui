import clsx from "clsx";
import "./Container.css";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Class name(s) added to the `<div>`.
   */
  className?: string;
  /**
   * Removes the default bottom margin, for containers that shouldn't add
   * space below themselves.
   */
  marginNone?: boolean;
}

/**
 * Centred content column (max 1120px), used inside Section.
 *
 * Centres content in a column up to 1120px wide, with a bottom margin to space
 * consecutive blocks. Use it inside a `Section` to hold a page's content.
 * Accepts all `<div>` attributes.
 *
 * @summary Centred content column (max 1120px), used inside Section.
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
