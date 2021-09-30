import { PageHeader } from "../..";
import { Hero } from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
};

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";

export const Default = () => (
  <Hero
    image={
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    }
  />
);

export const WithHeader = () => (
  <Hero
    image={
      <img
        src={imageSrc}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.7,
        }}
      />
    }
  >
    <PageHeader>Arctic Fox</PageHeader>
  </Hero>
);
