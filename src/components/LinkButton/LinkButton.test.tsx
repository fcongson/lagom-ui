import { render, screen } from "@testing-library/react";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  test("Renders", () => {
    render(<LinkButton to="#">Text</LinkButton>);
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <LinkButton to="#" primary>
        Text
      </LinkButton>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(
      <LinkButton to="#" primary={false}>
        Text
      </LinkButton>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
