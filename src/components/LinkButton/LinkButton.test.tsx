import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  test("Renders", () => {
    render(
      <ThemeProvider theme={{}}>
        <LinkButton to="#">Text</LinkButton>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <ThemeProvider theme={{}}>
        <LinkButton to="#" primary>
          Text
        </LinkButton>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(
      <ThemeProvider theme={{}}>
        <LinkButton to="#" primary={false}>
          Text
        </LinkButton>
      </ThemeProvider>
    );
    expect(screen.getAllByRole("button")).toMatchSnapshot();
  });
});
