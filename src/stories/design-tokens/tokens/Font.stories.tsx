import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Container, PageHeader, Section, SectionHeader } from "../../..";
import { TokenCard } from "../../utils/TokenCard";
import { brandTokens } from "../../utils/brandTokens";
import { cssCustomPropertyName } from "../../utils/cssCustomPropertyName";
import { formatPropertyName } from "../../utils/formatPropertyName";

/**
 * Visual reference for people. Excluded from the AI components manifest:
 * it has no component, and agents get this information from the docs pages.
 */
const meta: Meta = {
  title: "Design Tokens/Tokens",
  tags: ["!manifest"],
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
      border: "1px solid var(--lagom-semantic-color-bg-secondary)",
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
  core: Record<string, string>;
}

const FontGroup: React.FunctionComponent<FontGroupProps> = ({ type, core }) => (
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
  render: (_args, { globals }) => {
    const { tokens: core } = brandTokens(globals);
    return (
      <>
        <PageHeader>Font</PageHeader>
        <FontGroup type="Families" core={core} />
        <FontGroup type="Weights" core={core} />
        <FontGroup type="Sizes" core={core} />
      </>
    );
  },
};
