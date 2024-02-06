import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section } from "../../..";
import { TokenCard } from "../../utils/TokenCard";
import { cssCustomPropertyName } from "../../utils/cssCustomPropertyName";
import { sortByPx } from "../../utils/sortByPx";

const meta: Meta = {
  title: "Design Tokens/Tokens",
};

export default meta;

const TOKEN_KEY = "lagomCoreSpacing";

interface SpacingCardProps {
  name: string;
  value: string;
}

const SpacingCard: React.FunctionComponent<SpacingCardProps> = ({
  name,
  value,
}) => (
  <TokenCard
    preview={
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "var(--lagom-semantic-color-bg-muted)",
            height: "2rem",
            width: "2rem",
            borderRadius: "1rem",
          }}
        >
          {/* 👉 */}
        </div>
        <div
          style={{
            backgroundColor: "var(--lagom-semantic-color-accent-default)",
            height: "4rem",
            width: value,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "var(--lagom-semantic-color-bg-muted)",
            height: "2rem",
            width: "2rem",
            borderRadius: "1rem",
          }}
        >
          {/* 👈 */}
        </div>
      </div>
    }
    previewProps={{
      border: "1px solid var(--lagom-semantic-color-bg-muted)",
    }}
    name={cssCustomPropertyName(name)}
    value={value}
  />
);

const SpacingGroup: React.FunctionComponent = () => {
  const tokens = Object.keys(core).reduce((result, key) => {
    if (key.startsWith(TOKEN_KEY)) {
      result[key] = core[key];
    }
    return result;
  }, {});
  const sortedTokens = sortByPx(tokens);
  return (
    <Section>
      <Container>
        {Object.keys(sortedTokens).map((key) => (
          <SpacingCard key={key} name={key} value={core[key]} />
        ))}
      </Container>
    </Section>
  );
};

export const Spacing: StoryObj = {
  render: () => {
    return (
      <>
        <PageHeader>Spacing</PageHeader>
        <SpacingGroup />
      </>
    );
  },
};
