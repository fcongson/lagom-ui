import { Meta, StoryObj } from "@storybook/react-webpack5";
import { LinkButton } from "./LinkButton";

const meta: Meta = {
  title: "Components/Link Button",
  component: LinkButton,
  args: {
    to: "#",
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

/** The main destination in a view, styled to stand out. */
export const Primary: Story = {
  args: {
    primary: true,
    children: "Link button primary",
  },
};

/** The default, for other destinations. */
export const Secondary: Story = {
  args: {
    children: "Link button secondary",
  },
};

/**
 * Restyles the button with inline `style`, which bypasses theming and dark
 * mode. Kept as a visual test only. Use the `--themed-component-button-*`
 * properties instead.
 */
export const Custom: Story = {
  tags: ["!manifest"],
  args: {
    style: {
      backgroundColor: "var(--lagom-core-colors-olive-base)",
      borderColor: "var(--lagom-core-colors-olive-base)",
      color: "var(--lagom-core-colors-white)",
      borderRadius: 4,
      fontFamily: "monospace",
    },
    children: "Link button custom",
  },
};
