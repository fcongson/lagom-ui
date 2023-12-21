import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section } from "../..";
import { cssCustomPropertyName } from "../utils/cssCustomPropertyName";
import { TokenCard } from "./TokenCard";

const meta: Meta = {
  title: "Design Tokens/Spacing",
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
    preview={value}
    previewProps={{
      border: "1px solid var(--lagom-semantic-color-bg-muted)",
    }}
    name={cssCustomPropertyName(name)}
    value={value}
  />
);

const SpacingGroup: React.FunctionComponent = () => (
  <Section>
    <Container>
      {Object.keys(core).map((key) => {
        return key.startsWith(`${TOKEN_KEY}`) ? (
          <SpacingCard key={key} name={key} value={core[key]} />
        ) : undefined;
      })}
    </Container>
  </Section>
);

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
