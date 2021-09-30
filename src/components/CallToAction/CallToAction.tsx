import styled from "styled-components";
import { LinkButton, SectionHeader } from "../..";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const CallToActionContainer = styled.div`
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
`;

export const CallToAction: React.FunctionComponent<{
  header?: string;
  text?: string | JSX.Element | (string | JSX.Element)[];
  actionLink?: string;
  actionText?: string;
  LinkComponent?: React.ComponentType<{ to: string }>;
}> = ({
  header,
  text,
  actionLink,
  actionText,
  LinkComponent,
  ...restProps
}) => {
  const mergedTheme = useMergedTheme();
  return (
    <CallToActionContainer theme={mergedTheme} {...restProps}>
      {!!header && <SectionHeader>{header}</SectionHeader>}
      {!!text && <p>{text}</p>}
      {!!actionLink && !!actionText && (
        <LinkButton
          to={actionLink}
          Component={LinkComponent}
          margin="0 auto"
          backgroundColor="transparent"
        >
          {actionText}
        </LinkButton>
      )}
    </CallToActionContainer>
  );
};
