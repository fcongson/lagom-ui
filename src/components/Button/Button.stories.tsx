import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button onClick={action("clicked")} primary>
    Button primary
  </Button>
);

export const Secondary = () => (
  <Button onClick={action("clicked")}>Button secondary</Button>
);
