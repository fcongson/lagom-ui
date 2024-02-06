import { Container, PageHeader, Section, SectionHeader } from "../..";
import { ContentContainer } from "./ContentContainer";
import { VideoCard } from "./VideoCard";

const mdxComponents = {
  Section: ({ children }: { children?: React.ReactNode }) => (
    <Section>
      <Container>{children}</Container>
    </Section>
  ),
  h1: (props) => {
    return <PageHeader {...props} />;
  },
  h2: (props) => {
    return <SectionHeader {...props} />;
  },
  VideoCard,
};

export const Markdown: React.FunctionComponent<{
  Content: React.ComponentType<{ components }>;
}> = ({ Content }) => (
  <ContentContainer>
    <Content components={mdxComponents} />
  </ContentContainer>
);
