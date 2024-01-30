import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { Container, PageHeader, Section, SectionHeader } from "../..";

const meta: Meta = {
  title: "Design Tokens",
};

export default meta;

const AboutContainer = styled.div`
  .lagom-container {
    max-width: var(--sizes-max-width-content);
  }
`;

const VideoCard: React.FunctionComponent<{ title: string; src: string }> = ({
  title,
  src,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <div
        style={{
          aspectRatio: "16/9",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export const About: StoryObj = {
  render: () => {
    return (
      <AboutContainer>
        <PageHeader>Design Tokens</PageHeader>
        <Section>
          <Container>
            <p>
              Design tokens for Lagom UI are found in{" "}
              <a href="https://github.com/fcongson/lagom-tokens/pkgs/npm/lagom-tokens">
                Lagom Tokens
              </a>
              , a separate package consolidating design decisions to support my
              brands. It provides sensible defaults and feeds into Lagom UI to
              keep the decisions consistent.
            </p>
          </Container>
        </Section>
        <Section>
          <SectionHeader>Working With Tokens</SectionHeader>
          <Container>
            <VideoCard
              title="Organizing Design Tokens in Figma with Tokens Studio"
              src="https://www.youtube.com/embed/tBusiDOh_Sg?si=2xb9HlAOk5x2IpPK"
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <VideoCard
              title="Design Tokens Workflow with Tokens Studio and Style Dictionary"
              src="https://www.youtube.com/embed/mfvXIGmFPso?si=9PApm-mRfrBs6xvk"
            />
          </Container>
        </Section>
      </AboutContainer>
    );
  },
};
