import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section, SectionHeader } from "../..";
import { cssCustomPropertyName } from "../utils/cssCustomPropertyName";

const meta: Meta = {
  title: "Design Tokens/Color",
};

export default meta;

const TOKEN_KEY = "lagomCoreColors";

interface ColorCardProps {
  color: string;
  name: string;
  border?: string;
}

const ColorCard: React.FunctionComponent<ColorCardProps> = ({
  color,
  name,
  border,
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
        flex: 1,
        backgroundColor: color,
        border,
        borderRight: "none",
        borderRadius: "0.5rem 0 0 0.5rem",
      }}
    />
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
      <div style={{ fontSize: "var(--lagom-core-font-sizes-sm)" }}>{color}</div>
    </span>
  </div>
);

interface ColorGroupProps {
  color: string;
}

const ColorGroup: React.FunctionComponent<ColorGroupProps> = ({ color }) => (
  <Section>
    <Container>
      <SectionHeader>{color}</SectionHeader>
      {Object.keys(core).map((key) => {
        return key.startsWith(`${TOKEN_KEY}${color}`) ? (
          <ColorCard name={key} color={core[key]} />
        ) : undefined;
      })}
    </Container>
  </Section>
);

export const Color: StoryObj = {
  render: () => (
    <>
      <PageHeader>Color</PageHeader>
      <Section>
        <Container>
          <ColorCard
            name={`${TOKEN_KEY}Black`}
            color={core[`${TOKEN_KEY}Black`]}
          />
          <ColorCard
            name={`${TOKEN_KEY}White`}
            color={core[`${TOKEN_KEY}White`]}
            border="1px solid var(--lagom-semantic-color-bg-muted)"
          />
          <ColorCard
            name={`${TOKEN_KEY}Transparent`}
            color={core[`${TOKEN_KEY}Transparent`]}
            border="1px solid var(--lagom-semantic-color-bg-muted)"
          />
        </Container>
      </Section>
      <ColorGroup color="Grey" />
      <ColorGroup color="Olive" />
      <ColorGroup color="Violet" />
      <ColorGroup color="Navy" />
      <ColorGroup color="Red" />
      <ColorGroup color="Honey" />
    </>
  ),
};
