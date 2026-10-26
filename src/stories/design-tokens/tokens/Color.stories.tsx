import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Container, PageHeader, Section, SectionHeader } from "../../..";
import { TokenCard } from "../../utils/TokenCard";
import { brandTokens, paletteFamilies } from "../../utils/brandTokens";
import { cssCustomPropertyName } from "../../utils/cssCustomPropertyName";

/**
 * Visual reference for people. Excluded from the AI components manifest:
 * it has no component, and agents get this information from the docs pages.
 * Shows the brand, mode, and contrast selected in the toolbar.
 */
const meta: Meta = {
  title: "Design Tokens/Tokens",
  tags: ["!manifest"],
};

export default meta;

const ColorCard: React.FunctionComponent<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <TokenCard
    previewProps={{
      backgroundColor: color,
      border: "1px solid var(--lagom-semantic-color-border-secondary)",
    }}
    name={cssCustomPropertyName(name)}
    value={color}
  />
);

const ColorGroup: React.FunctionComponent<{
  title: string;
  colors: Array<[string, string]>;
}> = ({ title, colors }) => (
  <Section>
    <Container>
      <SectionHeader>{title}</SectionHeader>
      {colors.map(([name, color]) => (
        <ColorCard key={name} name={name} color={color} />
      ))}
    </Container>
  </Section>
);

export const Color: StoryObj = {
  render: (_args, { globals }) => {
    const { brand, tokens } = brandTokens(globals);
    const roles = Object.entries(tokens).filter(([key]) =>
      key.startsWith("lagomSemanticColor"),
    );
    return (
      <>
        <PageHeader>Color</PageHeader>
        <ColorGroup title="Roles" colors={roles} />
        {Object.entries(paletteFamilies(brand, tokens)).map(
          ([family, stops]) => (
            <ColorGroup
              key={family}
              title={family[0].toUpperCase() + family.slice(1)}
              colors={stops}
            />
          ),
        )}
      </>
    );
  },
};
