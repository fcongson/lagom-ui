import { LinkButton } from "./LinkButton";

export default {
  title: "Components/Link Button",
  component: LinkButton,
};

export const Primary = () => (
  <LinkButton to="/?path=/story/components-link-button--primary" primary>
    Link button primary
  </LinkButton>
);

export const Secondary = () => (
  <LinkButton to="/?path=/story/components-link-button--secondary">
    Link button secondary
  </LinkButton>
);

export const Custom = () => (
  <LinkButton
    to="/?path=/story/components-link-button--custom"
    backgroundColor="olive"
    borderColor="olive"
    color="white"
    borderRadius={4}
    fontFamily="monospace"
  >
    Link button custom
  </LinkButton>
);
