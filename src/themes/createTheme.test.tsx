import { createTheme } from "./createTheme";
import { theme } from "./theme";

describe("createTheme", () => {
  test("returns only the theme object", () => {
    expect(Object.keys(createTheme({}))).toEqual(["theme"]);
  });

  test("defaults match the default theme", () => {
    expect(createTheme().theme).toEqual(theme);
    expect(theme.sizes?.maxWidthContainer).toBe("1120px");
  });

  test("derives sizes and the emphasized breakpoint from the widths", () => {
    const { theme } = createTheme({ MAX_WIDTH_CONTAINER: 1000 });

    expect(theme.sizes?.maxWidthContainer).toBe("1000px");
    expect(theme.sizes?.minWidthEmph).toBe("1300px");
    expect(theme.mediaQueries?.emphasized).toBe(
      "@media screen and (min-width: 1300px)",
    );
  });
});
