import { action } from "@storybook/addon-actions";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = () => (
  <Button onClick={action("clicked")} primary>
    Button primary
  </Button>
);

export const Secondary = () => (
  <Button onClick={action("clicked")}>Button secondary</Button>
);

export const Custom = () => (
  <Button
    onClick={action("clicked")}
    backgroundColor="olive"
    borderColor="olive"
    color="white"
    borderRadius={4}
    fontFamily="monospace"
  >
    Button custom
  </Button>
);
