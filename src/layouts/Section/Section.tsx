import clsx from "clsx";
import styled from "styled-components";

const StyledSection = styled.section`
  &.lagom-section {
    /* Fallback */
    padding: 0 1rem;

    /* iOS 11 */
    padding-left: calc(max(1rem, constant(safe-area-inset-left)));
    padding-right: calc(max(1rem, constant(safe-area-inset-right)));

    /* iOS 11.2+ */
    padding-left: calc(max(1rem, env(safe-area-inset-left)));
    padding-right: calc(max(1rem, env(safe-area-inset-right)));

    max-width: var(--lagom-component-section-width, 1800px);
    margin: 0 auto;
  }

  &.lagom-section--background-color .container {
    background-color: inherit;
    padding: var(--lagom-component-container-margin-bottom) 0;
    margin: 0 auto;
  }
`;

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
  /**
   * Background color applied to this section
   */
  backgroundColor?: string;
}

/**
 * A layout element that defines a section in a document.
 */
export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  backgroundColor,
  ...restProps
}) => {
  return (
    <StyledSection
      className={clsx(
        "lagom-section",
        className,
        !!backgroundColor && "lagom-section--background-color",
      )}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </StyledSection>
  );
};
