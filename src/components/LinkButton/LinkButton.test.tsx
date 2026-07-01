import { render, screen } from "@testing-library/react";
import { MockGrowthBookProvider } from "../../test-utils/growthbook-mock";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  test("Renders", () => {
    render(
      <MockGrowthBookProvider>
        <LinkButton to="#">Text</LinkButton>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <MockGrowthBookProvider>
        <LinkButton to="#" primary>
          Text
        </LinkButton>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(
      <MockGrowthBookProvider>
        <LinkButton to="#" primary={false}>
          Text
        </LinkButton>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
