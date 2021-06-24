import { LinkButton } from "./LinkButton";

export default {
  title: "Components/Link Button",
  component: LinkButton,
};

export const Primary = () => (
  <LinkButton to="/?path=/story/linkbutton--link-button-primary" primary>
    Link button primary
  </LinkButton>
);

export const Secondary = () => (
  <LinkButton to="/?path=/story/linkbutton--link-button-secondary">
    Link button secondary
  </LinkButton>
);
