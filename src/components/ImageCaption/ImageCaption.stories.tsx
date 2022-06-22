import { theme } from "../../themes/theme";
import { ImageCaption } from "./ImageCaption";

export default {
  title: "Components/Image Caption",
  component: ImageCaption,
};

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";
const image = (
  <img
    src={imageSrc}
    alt={alt}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
);

export const Default = () => (
  <ImageCaption image={image} caption="Default. Lorem ipsum dolor sit amet" />
);

export const Emphasized = () => (
  <ImageCaption
    image={image}
    caption="Emphasized. Lorem ipsum dolor sit amet"
    emphasized
  />
);

export const Fullwidth = () => (
  <ImageCaption
    image={image}
    caption="Fullwidth. Lorem ipsum dolor sit amet"
    fullwidth
  />
);
