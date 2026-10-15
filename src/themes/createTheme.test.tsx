import { render } from "@testing-library/react";
import { createTheme } from "./createTheme";

const renderGlobalCss = (...args: Parameters<typeof createTheme>) => {
  const { GlobalStyle } = createTheme(...args);
  const { container } = render(<GlobalStyle />);
  return container.querySelector("style")?.textContent ?? "";
};

describe("createTheme", () => {
  test("emits only the properties a partial theme defines", () => {
    const css = renderGlobalCss({
      button: { primary: { backgroundColor: "rebeccapurple" } },
    });

    expect(css).not.toContain("undefined");
    expect(css).toContain(
      "--themed-component-button-color-primary-background: rebeccapurple;",
    );
    expect(css).not.toContain("--themed-component-button-border-radius");
    expect(css).not.toContain("--themed-core-font-sizes-body");
    expect(css).not.toContain("--themed-core-font-families-sans-serif");
  });

  test("emits an empty :root block for an empty theme", () => {
    const css = renderGlobalCss({});

    expect(css).not.toContain("undefined");
    expect(css).not.toContain("--themed-");
  });

  test("emits every provided property", () => {
    const css = renderGlobalCss({
      core: {
        fontFamilies: { sansSerif: "Inter, sans-serif" },
        fontSizes: { body: "18px" },
        headerScale: { 1: "3rem" },
      },
      button: { borderRadius: "4px" },
    });

    expect(css).toContain(
      "--themed-core-font-families-sans-serif: Inter, sans-serif;",
    );
    expect(css).toContain("--themed-core-font-sizes-body: 18px;");
    expect(css).toContain("--themed-header-scale-1: 3rem;");
    expect(css).toContain("--themed-component-button-border-radius: 4px;");
    expect(css).not.toContain("undefined");
  });
});
