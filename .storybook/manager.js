import { addons } from "@storybook/manager-api";
import lagomStorybook from "./lagom-storybook";
import "./style.css";

addons.setConfig({
  theme: lagomStorybook,
});
