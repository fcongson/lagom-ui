import clsx from "clsx";
import styled from "styled-components";
import { LinkButton, SectionHeader } from "../..";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const CallToActionContainer = styled.div`
  &.lagom-call-to-action {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      margin: 0 auto 4rem auto;
      padding: 0 2rem 0 2rem;

      ${(props) => props.theme.mediaQueries.large} {
        font-size: 16px;
        margin: 0 auto 2rem auto;
        padding: 0 1rem 0 1rem;
      }
    }
  }
`;

export const CallToAction: React.FunctionComponent<{
  className?: string;
  header?: string;
  text?: string | JSX.Element | (string | JSX.Element)[];
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
  const mergedTheme = useMergedTheme();
  return (
    <CallToActionContainer
      theme={mergedTheme}
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
    </CallToActionContainer>
  );
};
