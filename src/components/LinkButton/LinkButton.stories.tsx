import { LinkButton } from "./LinkButton";

export default {
  title: "Link Button",
  component: LinkButton,
};

export const LinkButtonPrimary = () => (
  <LinkButton to="/?path=/story/linkbutton--link-button-primary" primary>
    Link button primary
  </LinkButton>
);

export const LinkButtonSecondary = () => (
  <LinkButton to="/?path=/story/linkbutton--link-button-secondary">
    Link button secondary
  </LinkButton>
);
