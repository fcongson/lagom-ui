import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section, SectionHeader } from "../..";
import { cssCustomPropertyName } from "../utils/cssCustomPropertyName";

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
  <div
    style={{
      width: "100%",
      minHeight: "4rem",
      margin: "1rem",
      borderRadius: "0.5rem",
      display: "flex",
      overflow: "hidden",
    }}
  >
    <span
      style={{
        padding: "1rem",
        width: "50%",
        border: "1px solid var(--lagom-semantic-color-bg-muted)",
        borderRight: "none",
        borderRadius: "0.5rem 0 0 0.5rem",
        fontFamily: type === "Families" ? value : "inherit",
        fontWeight: type === "Weights" ? value : "inherit",
        fontSize: type === "Sizes" ? value : "inherit",
      }}
    >
      Aa Lorem ipsum
    </span>
    <span
      style={{
        padding: "1rem",
        width: "50%",
        backgroundColor: "var(--lagom-semantic-color-bg-muted)",
        borderRadius: "0 0.5rem 0.5rem 0",
        fontFamily: "var(--lagom-core-font-families-monospace)",
      }}
    >
      <div>{cssCustomPropertyName(name)}</div>
      <div style={{ fontSize: "var(--lagom-core-font-sizes-sm)" }}>{value}</div>
    </span>
  </div>
);

interface FontGroupProps {
  type: string;
}

const FontGroup: React.FunctionComponent<FontGroupProps> = ({ type }) => (
  <Section>
    <Container>
      <SectionHeader>{type}</SectionHeader>
      {Object.keys(core).map((key) => {
        return key.startsWith(`${TOKEN_KEY}${type}`) ? (
          <FontCard name={key} value={core[key]} type={type} />
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
