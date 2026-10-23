import { render, screen } from "@testing-library/react";
import { MockGrowthBookProvider } from "../../test-utils/growthbook-mock";
import { Button } from "./Button";

describe("Button", () => {
  test("Renders", () => {
    render(
      <MockGrowthBookProvider>
        <Button>Text</Button>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <MockGrowthBookProvider>
        <Button primary>Text</Button>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Doesn't pass the experimental icon prop to the DOM", () => {
    render(
      <MockGrowthBookProvider>
        <Button icon="🚀">Text</Button>
      </MockGrowthBookProvider>,
    );
    expect(screen.getByRole("button").hasAttribute("icon")).toBe(false);
  });
  test("Renders secondary", () => {
    render(
      <MockGrowthBookProvider>
        <Button primary={false}>Text</Button>
      </MockGrowthBookProvider>,
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
