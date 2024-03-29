import clsx from "clsx";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* .lagom-container */
  max-width: var(
    --lagom-component-container-width,
    ${({ theme }) => theme.sizes.maxWidthContainer}
  );
  margin: 0 auto;
  margin-bottom: var(--lagom-component-container-margin-bottom, 8rem);

  &.lagom-container--margin-none {
    margin-bottom: unset;
  }
`;

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
    <StyledContainer
      className={clsx(
        "lagom-container",
        className,
        marginNone && "lagom-container--margin-none",
      )}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};
