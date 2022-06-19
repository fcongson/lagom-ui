import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Renders", () => {
    render(<Button>Text</Button>);
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(<Button primary>Text</Button>);
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(<Button primary={false}>Text</Button>);
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
