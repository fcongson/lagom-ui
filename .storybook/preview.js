import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(withKnobs);
