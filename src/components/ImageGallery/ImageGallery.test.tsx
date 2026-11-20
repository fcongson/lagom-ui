import { render, screen } from "@testing-library/react";
import { resetDevWarnings } from "../../utils/devWarning";
import { ImageGallery } from "./ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryRow } from "./ImageGalleryRow";

const landscape = (alt: string) => (
  <img src="/landscape.jpg" alt={alt} width={1500} height={1000} />
);

const ratioOf = (item: HTMLElement) =>
  item.style.getPropertyValue("--lagom-image-gallery-ratio");

let warn: jest.SpyInstance;

beforeEach(() => {
  resetDevWarnings();
  warn = jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  warn.mockRestore();
});

describe("ImageGallery", () => {
  test("Renders", () => {
    const { container } = render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} caption="First" />
          <ImageGalleryItem image={landscape("Two")} caption="Second" />
        </ImageGalleryRow>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("Three")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(container).toMatchSnapshot();
  });

  test("Puts every row in one list, with a hidden break between rows", () => {
    const { container } = render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
          <ImageGalleryItem image={landscape("Two")} />
        </ImageGalleryRow>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("Three")} />
          <ImageGalleryItem image={landscape("Four")} />
          <ImageGalleryItem image={landscape("Five")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(screen.getAllByRole("list")).toHaveLength(1);
    // Breaks are aria-hidden, so only the images count as list items.
    expect(screen.getAllByRole("listitem")).toHaveLength(5);

    const children = [...container.querySelectorAll("ul > li")];
    expect(children.map((li) => li.className)).toEqual([
      "lagom-image-gallery__item",
      "lagom-image-gallery__item",
      "lagom-image-gallery__break",
      "lagom-image-gallery__item",
      "lagom-image-gallery__item",
      "lagom-image-gallery__item",
    ]);
    expect(children[2].getAttribute("aria-hidden")).toBe("true");
  });

  test("Stacks at the breakpoint for its largest row", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
          <ImageGalleryItem image={landscape("Two")} />
        </ImageGalleryRow>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("Three")} />
          <ImageGalleryItem image={landscape("Four")} />
          <ImageGalleryItem image={landscape("Five")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(screen.getByRole("list").className).toContain(
      "lagom-image-gallery__list--stack-3",
    );
  });

  test("Has no stacking class when every row has one image", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(screen.getByRole("list").className).not.toContain("--stack-");
  });

  test("Renders in a Section and Container by default", () => {
    const { container } = render(
      <ImageGallery className="custom">
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    const section = container.firstElementChild as HTMLElement;
    expect(section.tagName).toBe("SECTION");
    expect(section.className).toContain("lagom-image-gallery");
    expect(section.className).toContain("custom");
    expect(section.querySelector(".lagom-container > ul")).not.toBeNull();
  });

  test("Renders the list directly at full width", () => {
    const { container } = render(
      <ImageGallery fullwidth className="custom" aria-label="Arctic foxes">
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    const list = container.firstElementChild as HTMLElement;
    expect(list.tagName).toBe("UL");
    expect(list.className).toContain("lagom-image-gallery--full-width");
    expect(list.className).toContain("custom");
    expect(screen.getByRole("list", { name: "Arctic foxes" })).toBe(list);
  });

  test("Prefers emphasized over fullwidth", () => {
    const { container } = render(
      <ImageGallery emphasized fullwidth>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(container.firstElementChild?.tagName).toBe("SECTION");
    const list = screen.getByRole("list");
    expect(list.className).toContain("lagom-image-gallery--emphasized");
    expect(list.className).not.toContain("--full-width");
  });

  test("Warns when a row has more than 3 images", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
          <ImageGalleryItem image={landscape("Two")} />
          <ImageGalleryItem image={landscape("Three")} />
          <ImageGalleryItem image={landscape("Four")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("rows hold up to 3 images"),
    );
  });

  test("Allows 4 images per row at full width", () => {
    render(
      <ImageGallery fullwidth>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} />
          <ImageGalleryItem image={landscape("Two")} />
          <ImageGalleryItem image={landscape("Three")} />
          <ImageGalleryItem image={landscape("Four")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(warn).not.toHaveBeenCalled();
    expect(screen.getByRole("list").className).toContain(
      "lagom-image-gallery__list--stack-4",
    );
  });

  test("Renders nothing without rows", () => {
    const { container } = render(<ImageGallery>{null}</ImageGallery>);
    expect(container.innerHTML).toBe("");
  });
});

describe("ImageGalleryItem", () => {
  test("Renders the caption only when set", () => {
    const { container } = render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} caption="A caption" />
          <ImageGalleryItem image={landscape("Two")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    const captions = container.querySelectorAll("figcaption");
    expect(captions).toHaveLength(1);
    expect(captions[0].textContent).toBe("A caption");
  });

  test("Reads the shape from the image's width and height", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem
            image={<img src="/a.jpg" alt="Tall" width="1000" height="2000" />}
          />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(ratioOf(screen.getByRole("listitem"))).toBe("0.5");
    expect(warn).not.toHaveBeenCalled();
  });

  test("Prefers the ratio prop over width and height", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={landscape("One")} ratio={2} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(ratioOf(screen.getByRole("listitem"))).toBe("2");
  });

  test("Falls back to a square, with a warning, when the shape is unknown", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={<img src="/a.jpg" alt="Unknown" />} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(ratioOf(screen.getByRole("listitem"))).toBe("1");
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("add `width` and `height`"),
    );
  });

  test("Renders nothing without an image", () => {
    render(
      <ImageGallery>
        <ImageGalleryRow>
          <ImageGalleryItem image={null} caption="Orphan" />
          <ImageGalleryItem image={landscape("One")} />
        </ImageGalleryRow>
      </ImageGallery>,
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
