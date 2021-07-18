import styled from "styled-components";
import { Container, Section } from "..";

export default {
  title: "Welcome/About",
};

const AboutContainer = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`;

export const About = () => (
  <AboutContainer>
    <Section>
      <Container display="flex" justifyContent="center">
        <img src="lagom-logo.png" alt="Lagom UI Logo" width="100%" />
      </Container>
    </Section>
    <Section>
      <Container display="flex" flexDirection="column" justifyContent="center">
        <p>
          <a href="https://en.wikipedia.org/wiki/Lagom">Lagom</a> (pronounced
          [ˈlɑ̂ːɡɔm]) is a Swedish and Norwegian word meaning "just the right
          amount".
        </p>
        <p>
          This component library provides just the right amount of components
          for my own personal projects. Primarily driven by{" "}
          <a href="https://frankcongson.com/">FrankCongson.com</a>. With theme
          support for individually styled projects.
        </p>
        <p>
          Built using{" "}
          <a href="https://styled-components.com/">styled components</a> and{" "}
          <a href="https://styled-system.com/">Styled System</a>.
        </p>
        <small className="copyright">
          Copyright © {new Date().getFullYear()} Frank Congson
        </small>
      </Container>
    </Section>
  </AboutContainer>
);
