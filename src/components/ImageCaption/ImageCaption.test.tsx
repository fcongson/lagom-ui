import { render } from "@testing-library/react";
import { ImageCaption } from "./ImageCaption";

const image = <img src="/fox.jpg" alt="Arctic fox" />;

describe("ImageCaption", () => {
  test("Renders default", () => {
    const { container } = render(
      <ImageCaption image={image} caption="Default caption" />,
    );
    expect(container).toMatchSnapshot();
  });
  test("Renders emphasized", () => {
    const { container } = render(
      <ImageCaption image={image} caption="Emphasized caption" emphasized />,
    );
    expect(container).toMatchSnapshot();
  });
  test("Renders full width", () => {
    const { container } = render(
      <ImageCaption image={image} caption="Full-width caption" fullwidth />,
    );
    expect(container).toMatchSnapshot();
  });
  test("Omits the figcaption when there's no caption", () => {
    const { container } = render(<ImageCaption image={image} />);
    expect(container.querySelector("figcaption")).toBeNull();
    expect(container).toMatchSnapshot();
  });
  test("Renders nothing without an image", () => {
    const { container } = render(
      <ImageCaption image={null} caption="Orphan" />,
    );
    expect(container.innerHTML).toBe("");
  });
});
