import * as core from "@fcongson/lagom-tokens/js/variables/core";
import * as semantic from "@fcongson/lagom-tokens/js/variables/semantic";
import * as semanticDark from "@fcongson/lagom-tokens/js/variables/semantic.dark";
import * as semanticLight from "@fcongson/lagom-tokens/js/variables/semantic.light";
import { Meta, StoryObj } from "@storybook/react";
import { Container, PageHeader, Section, SectionHeader } from "../../..";
import { TokenCard } from "../../utils/TokenCard";
import { cssCustomPropertyName } from "../../utils/cssCustomPropertyName";
import { sortByHexColor } from "../../utils/sortByHexColor";

const meta: Meta = {
  title: "Design Tokens/Tokens",
};

export default meta;

const TOKEN_KEY = "lagomCoreColors";
const TOKEN_KEY_SEMANTIC = "lagomSemanticColor";

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
  <TokenCard
    previewProps={{ backgroundColor: color, border }}
    name={cssCustomPropertyName(name)}
    value={color}
  />
);

interface ColorGroupProps {
  color?: string;
  title?: string;
  tokenSet: Object;
  tokenKey?: string;
  sort?: boolean;
}

const ColorGroup: React.FunctionComponent<ColorGroupProps> = ({
  color,
  title,
  tokenSet,
  tokenKey = TOKEN_KEY,
  sort = false,
}) => {
  const colors = Object.keys(tokenSet).reduce((result, key) => {
    if (key.startsWith(`${tokenKey}${color ?? ""}`)) {
      result[key] = tokenSet[key];
    }
    return result;
  }, {});
  const sortedColors = sortByHexColor(colors);
  return (
    <Section>
      <Container>
        <SectionHeader>{title || color}</SectionHeader>
        {Object.keys(sort ? sortedColors : colors).map((color) => (
          <ColorCard key={color} name={color} color={tokenSet[color]} />
        ))}
      </Container>
    </Section>
  );
};

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
      <ColorGroup color="Grey" tokenSet={core} sort />
      <ColorGroup color="Olive" tokenSet={core} sort />
      <ColorGroup color="Violet" tokenSet={core} sort />
      <ColorGroup color="Navy" tokenSet={core} sort />
      <ColorGroup color="Red" tokenSet={core} sort />
      <ColorGroup color="Honey" tokenSet={core} sort />
      <ColorGroup
        title="Semantic"
        tokenSet={semantic}
        tokenKey={TOKEN_KEY_SEMANTIC}
      />
      <ColorGroup
        title="Semantic Light"
        tokenSet={semanticLight}
        tokenKey={TOKEN_KEY_SEMANTIC}
      />
      <ColorGroup
        title="Semantic Dark"
        tokenSet={semanticDark}
        tokenKey={TOKEN_KEY_SEMANTIC}
      />
    </>
  ),
};
