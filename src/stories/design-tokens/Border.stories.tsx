import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, PageHeader, Section, SectionHeader } from "../..";
import { cssCustomPropertyName } from "../utils/cssCustomPropertyName";
import { TokenCard } from "./TokenCard";

const meta: Meta = {
  title: "Design Tokens/Border",
};

export default meta;

const TOKEN_KEY = "lagomCoreBorder";

interface BorderCardProps {
  name: string;
  value: string;
}

const BorderCard: React.FunctionComponent<BorderCardProps> = ({
  name,
  value,
}) => (
  <TokenCard
    preview={
      <div
        style={{
          borderRadius: value,
          backgroundColor: "var(--lagom-semantic-color-accent-default)",
          height: "4rem",
          width: "4rem",
        }}
      ></div>
    }
    previewProps={{
      border: "1px solid var(--lagom-semantic-color-bg-muted)",
    }}
    name={cssCustomPropertyName(name)}
    value={value}
  />
);

interface BorderGroupProps {
  type?: string;
}

const BorderGroup: React.FunctionComponent<BorderGroupProps> = ({ type }) => (
  <Section>
    <Container>
      <SectionHeader>Border {type}</SectionHeader>
      {Object.keys(core).map((key) => {
        return key.startsWith(`${TOKEN_KEY}${type}`) ? (
          <BorderCard key={key} name={key} value={core[key]} />
        ) : undefined;
      })}
    </Container>
  </Section>
);

export const Border: StoryObj = {
  render: () => {
    return (
      <>
        <PageHeader>Border</PageHeader>
        <BorderGroup type="Radius" />
      </>
    );
  },
};
