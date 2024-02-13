import { addons } from "@storybook/addons";
import lagomStorybook from "./lagom-storybook";
import "./preview.css";

addons.setConfig({
  theme: lagomStorybook,
});
