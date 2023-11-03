import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./Button";

describe("Button", () => {
  test("Renders", () => {
    render(
      <ThemeProvider theme={{}}>
        <Button>Text</Button>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <ThemeProvider theme={{}}>
        <Button primary>Text</Button>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(
      <ThemeProvider theme={{}}>
        <Button primary={false}>Text</Button>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
