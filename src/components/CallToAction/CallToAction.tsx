import clsx from "clsx";
import { LinkButton, SectionHeader } from "../..";
import "./CallToAction.css";

export const CallToAction: React.FunctionComponent<{
  className?: string;
  header?: string;
  text?: string | React.JSX.Element | (string | React.JSX.Element)[];
  actionLink?: string;
  actionText?: string;
  LinkComponent?: React.ComponentType<{ to: string }>;
}> = ({
  className,
  header,
  text,
  actionLink,
  actionText,
  LinkComponent,
  ...restProps
}) => {
  return (
    <div
      className={clsx("lagom-call-to-action", className)}
      {...restProps}
    >
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
