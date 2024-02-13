import { addons } from "@storybook/addons";
import lagomStorybook from "./lagom-storybook";
import "./style.css";

addons.setConfig({
  theme: lagomStorybook,
});
