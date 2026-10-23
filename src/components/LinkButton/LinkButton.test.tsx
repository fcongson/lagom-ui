import { render, screen } from "@testing-library/react";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  test("Renders", () => {
    render(<LinkButton to="#">Text</LinkButton>);
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
  test("Renders primary", () => {
    render(
      <LinkButton to="#" primary>
        Text
      </LinkButton>,
    );
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
  test("Renders secondary", () => {
    render(
      <LinkButton to="#" primary={false}>
        Text
      </LinkButton>,
    );
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
  test("Renders a single link with no nested button", () => {
    render(<LinkButton to="/about">About</LinkButton>);
    const link = screen.getByRole("link", { name: "About" });
    expect(link.getAttribute("href")).toBe("/about");
    expect(screen.queryByRole("button")).toBeNull();
  });
  test("Renders a framework link component with props passed through", () => {
    const FrameworkLink = ({
      to,
      children,
      ...props
    }: { to: string } & React.ComponentPropsWithoutRef<"a">) => (
      <a data-framework-link href={to} {...props}>
        {children}
      </a>
    );
    render(
      <LinkButton to="/posts" Component={FrameworkLink} aria-label="All posts">
        Posts
      </LinkButton>,
    );
    const link = screen.getByRole("link", { name: "All posts" });
    expect(link.hasAttribute("data-framework-link")).toBe(true);
    expect(link.getAttribute("href")).toBe("/posts");
    expect(link.classList).toContain("lagom-link-button");
    expect(link.classList).toContain("lagom-button");
    expect(screen.queryByRole("button")).toBeNull();
  });
});
