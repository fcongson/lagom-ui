import clsx from "clsx";
import { LinkButton, SectionHeader } from "../..";
import "./CallToAction.css";

type CallToActionProps = {
  /** Class name(s) added to the wrapper `<div>`. */
  className?: string;
  /** Heading, rendered as a `SectionHeader` (`<h2>`). */
  header?: string;
  /** Supporting text, rendered in a centred `<p>`. */
  text?: string | React.JSX.Element | (string | React.JSX.Element)[];
  /**
   * Where the action button links to. The button only renders when both
   * `actionLink` and `actionText` are set.
   */
  actionLink?: string;
  /**
   * Label for the action button. Make it describe the destination or action
   * (e.g. "Read the case study"), not "Click here".
   */
  actionText?: string;
  /**
   * A framework link component (e.g. Gatsby's or Next's `Link`) used for the
   * action button instead of a plain `<a>`. Passed to `LinkButton` as
   * `Component`.
   */
  LinkComponent?: React.ComponentType<{ to: string }>;
};

/**
 * Centred heading, text, and action button prompting a next step.
 *
 * A centred block with a heading, short text, and one action button, used to
 * prompt the reader's next step at the end of a section or page. Often placed
 * inside a `FeaturedSection`.
 *
 * @summary Centred heading, text, and action button prompting a next step.
 */
export const CallToAction: React.FunctionComponent<CallToActionProps> = ({
  className,
  header,
  text,
  actionLink,
  actionText,
  LinkComponent,
  ...restProps
}) => {
  return (
    <div className={clsx("lagom-call-to-action", className)} {...restProps}>
      {!!header && (
        <SectionHeader className="lagom-call-to-action__header">
          {header}
        </SectionHeader>
      )}
      {!!text && <p className="lagom-call-to-action__text">{text}</p>}
      {!!actionLink && !!actionText && (
        <LinkButton
          className="lagom-call-to-action__link"
          to={actionLink}
          Component={LinkComponent}
          style={{ margin: "0 auto", backgroundColor: "transparent" }}
        >
          {actionText}
        </LinkButton>
      )}
    </div>
  );
};
