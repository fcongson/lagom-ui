import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const ButtonPrimary = () => (
  <Button onClick={action("clicked")} primary>
    Button primary
  </Button>
);

export const ButtonSecondary = () => (
  <Button onClick={action("clicked")}>Button secondary</Button>
);
