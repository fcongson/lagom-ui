import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section, SectionHeader } from "../..";
import { cssCustomPropertyName } from "../utils/cssCustomPropertyName";
import { formatPropertyName } from "../utils/formatPropertyName";
import { TokenCard } from "./TokenCard";

const meta: Meta = {
  title: "Design Tokens/Font",
};

export default meta;

const TOKEN_KEY = "lagomCoreFont";

interface FontCardProps {
  name: string;
  value: string;
  type: string;
}

const FontCard: React.FunctionComponent<FontCardProps> = ({
  name,
  value,
  type,
}) => (
  <TokenCard
    preview={`Aa ${formatPropertyName(name)}`}
    previewProps={{
      border: "1px solid var(--lagom-semantic-color-bg-muted)",
      fontFamily: type === "Families" ? value : "inherit",
      fontWeight: type === "Weights" ? value : "inherit",
      fontSize: type === "Sizes" ? value : "inherit",
    }}
    name={cssCustomPropertyName(name)}
    value={value}
  />
);

interface FontGroupProps {
  type: string;
}

const FontGroup: React.FunctionComponent<FontGroupProps> = ({ type }) => (
  <Section>
    <Container>
      <SectionHeader>Font {type}</SectionHeader>
      {Object.keys(core).map((key) => {
        return key.startsWith(`${TOKEN_KEY}${type}`) ? (
          <FontCard key={key} name={key} value={core[key]} type={type} />
        ) : undefined;
      })}
    </Container>
  </Section>
);

export const Font: StoryObj = {
  render: () => {
    return (
      <>
        <PageHeader>Font</PageHeader>
        <FontGroup type="Families" />
        <FontGroup type="Weights" />
        <FontGroup type="Sizes" />
      </>
    );
  },
};
