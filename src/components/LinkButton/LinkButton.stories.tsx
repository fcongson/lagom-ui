import { LinkButton } from "./LinkButton";

export default {
  title: "LinkButton",
  component: LinkButton,
};

export const LinkButtonPrimary = () => (
  <LinkButton to="#" primary>
    Link button primary
  </LinkButton>
);

export const LinkButtonSecondary = () => (
  <LinkButton to="#">Link button secondary</LinkButton>
);
