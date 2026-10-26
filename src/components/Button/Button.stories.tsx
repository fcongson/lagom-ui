import { Meta, StoryObj } from "@storybook/react-webpack5";
import { keyModes } from "../../stories/utils/modes";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  args: {
    primary: true,
    children: "Button primary",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** The main action in a view. Use one per group. */
export const Primary: Story = {};

/** The default, for actions other than the main one. */
export const Secondary: Story = {
  ...Primary,
  args: {
    primary: false,
    children: "Button secondary",
  },
};

/**
 * Restyles the button with inline `style`, which bypasses theming and dark
 * mode. Kept as a visual test only. Override the `--lagom-semantic-color-button-*`
 * and `--lagom-component-button-*` tokens instead.
 */
export const Custom: Story = {
  tags: ["!manifest"],
  ...Primary,
  args: {
    primary: false,
    style: {
      backgroundColor: "var(--lagom-semantic-color-accent-default)",
      borderColor: "var(--lagom-semantic-color-accent-default)",
      color: "var(--lagom-semantic-color-accent-on-accent)",
      borderRadius: 4,
      fontFamily: "monospace",
    },
    children: "Button custom",
  },
};

/**
 * The `icon` prop is behind the `icon-button` GrowthBook flag and isn't
 * stable API, so this story is left out of the AI manifest.
 */
export const WithExperimentalIcon: Story = {
  ...Primary,
  tags: ["!manifest"],
  args: {
    primary: false,
    children: "With icon",
    icon: "🚀",
  },
};

/**
 * Keyboard focus: the brand's focus ring. A visual test, snapshotted in
 * every brand, mode, and contrast.
 */
export const Focused: Story = {
  tags: ["!manifest"],
  render: () => (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    canvasElement.querySelector("button")?.focus();
  },
  parameters: { chromatic: { modes: keyModes } },
};
