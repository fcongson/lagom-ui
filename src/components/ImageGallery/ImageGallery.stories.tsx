import { Meta, StoryObj } from "@storybook/react-webpack5";
import { viewportModes } from "../../stories/utils/modes";
import { ImageGallery } from "./ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryRow } from "./ImageGalleryRow";

const meta: Meta<typeof ImageGallery> = {
  title: "Components/Image Gallery",
  component: ImageGallery,
  subcomponents: { ImageGalleryRow, ImageGalleryItem },
  parameters: {
    // Snapshot every story at phone, tablet, and desktop widths, so the
    // reflow itself is covered.
    chromatic: { modes: viewportModes },
  },
};

export default meta;

type Story = StoryObj<typeof ImageGallery>;

/** Rows of 2 and 3 images, for most galleries. */
export const Default: Story = {
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/church-mountain-waterfall.jpg"
              alt="A small white church below misty mountains and a waterfall"
              width={2400}
              height={1600}
            />
          }
          caption="Church"
        />
        <ImageGalleryItem
          image={
            <img
              src="/red-cabins-rocky-coast.jpg"
              alt="Red cabins on a rocky coast"
              width={2400}
              height={1600}
            />
          }
          caption="Rocky coast"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/white-house-reflection.jpg"
              alt="A white house on golden grass, reflected in still water"
              width={2400}
              height={1600}
            />
          }
          caption="Reflection"
        />
        <ImageGalleryItem
          image={
            <img
              src="/yellow-house-mist.jpg"
              alt="A yellow wooden house in front of mist-covered mountains"
              width={2400}
              height={1600}
            />
          }
          caption="Mist"
        />
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-RMAKCQmu-gI-unsplash.jpg"
              alt="A dark Arctic fox sitting in snow, by Jonatan Pie"
              width={4000}
              height={2667}
            />
          }
          caption="Dark fox"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** Portraits and landscapes share a height, uncropped. */
export const MixedShapes: Story = {
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-A9W4Nor4QT8-unsplash.jpg"
              alt="A mug of tea on a white blanket with fairy lights, beside an open book, by Sixteen Miles Out"
              width={2400}
              height={1600}
            />
          }
          caption="3:2"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-BaDjCICkyag-unsplash.jpg"
              alt="Eucalyptus stems in a terracotta vase against a white wall, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="2:3"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-gTv6Zm54tLY-unsplash.jpg"
              alt="A cup of coffee on a wooden table beside a linen cloth, by Sixteen Miles Out"
              width={2400}
              height={1920}
            />
          }
          caption="5:4"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-oDfeFV-Y2v0-unsplash.jpg"
              alt="A lit candle and dried flowers on a windowsill at dusk, by Sixteen Miles Out"
              width={1920}
              height={2400}
            />
          }
          caption="4:5"
        />
        <ImageGalleryItem
          image={
            <img
              src="/church-mountain-waterfall.jpg"
              alt="A small white church below misty mountains and a waterfall"
              width={2400}
              height={1600}
            />
          }
          caption="3:2"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-3ZvHsFiZyME-unsplash.jpg"
              alt="An open book and a notebook with a pen on a bed, beside a tray with coffee and greenery, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="2:3"
        />
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
              alt="An Arctic fox in the snow, by Jonatan Pie"
              width={3253}
              height={3842}
            />
          }
          caption="Portrait"
        />
        <ImageGalleryItem
          image={
            <img
              src="/red-cabin-pond.jpg"
              alt="A red cabin beside a pond in a flat, frosty field"
              width={1755}
              height={2576}
            />
          }
          caption="Tall"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** A single row, for a short set of related images. */
export const SingleRow: Story = {
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-oDfeFV-Y2v0-unsplash.jpg"
              alt="A lit candle and dried flowers on a windowsill at dusk, by Sixteen Miles Out"
              width={1920}
              height={2400}
            />
          }
          caption="Candle"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-A9W4Nor4QT8-unsplash.jpg"
              alt="A mug of tea on a white blanket with fairy lights, beside an open book, by Sixteen Miles Out"
              width={2400}
              height={1600}
            />
          }
          caption="Tea"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-BaDjCICkyag-unsplash.jpg"
              alt="Eucalyptus stems in a terracotta vase against a white wall, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="Eucalyptus"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** Images only, when they speak for themselves. */
export const WithoutCaptions: Story = {
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-gTv6Zm54tLY-unsplash.jpg"
              alt="A cup of coffee on a wooden table beside a linen cloth, by Sixteen Miles Out"
              width={2400}
              height={1920}
            />
          }
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-3ZvHsFiZyME-unsplash.jpg"
              alt="An open book and a notebook with a pen on a bed, beside a tray with coffee and greenery, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-A9W4Nor4QT8-unsplash.jpg"
              alt="A mug of tea on a white blanket with fairy lights, beside an open book, by Sixteen Miles Out"
              width={2400}
              height={1600}
            />
          }
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-BaDjCICkyag-unsplash.jpg"
              alt="Eucalyptus stems in a terracotta vase against a white wall, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-oDfeFV-Y2v0-unsplash.jpg"
              alt="A lit candle and dried flowers on a windowsill at dusk, by Sixteen Miles Out"
              width={1920}
              height={2400}
            />
          }
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** Captions of different lengths keep images aligned. */
export const LongCaptions: Story = {
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/church-mountain-waterfall.jpg"
              alt="A small white church below misty mountains and a waterfall"
              width={2400}
              height={1600}
            />
          }
          caption="A church at the foot of the mountains, photographed on a misty morning after a week of rain"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-BaDjCICkyag-unsplash.jpg"
              alt="Eucalyptus stems in a terracotta vase against a white wall, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="Short"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-gTv6Zm54tLY-unsplash.jpg"
              alt="A cup of coffee on a wooden table beside a linen cloth, by Sixteen Miles Out"
              width={2400}
              height={1920}
            />
          }
          caption="Coffee on an old table, mid-afternoon"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** Wider than the text on large screens, to draw attention. */
export const Emphasized: Story = {
  args: { emphasized: true },
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/church-mountain-waterfall.jpg"
              alt="A small white church below misty mountains and a waterfall"
              width={2400}
              height={1600}
            />
          }
          caption="Church"
        />
        <ImageGalleryItem
          image={
            <img
              src="/red-cabins-rocky-coast.jpg"
              alt="Red cabins on a rocky coast"
              width={2400}
              height={1600}
            />
          }
          caption="Rocky coast"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/white-house-reflection.jpg"
              alt="A white house on golden grass, reflected in still water"
              width={2400}
              height={1600}
            />
          }
          caption="Reflection"
        />
        <ImageGalleryItem
          image={
            <img
              src="/yellow-house-mist.jpg"
              alt="A yellow wooden house in front of mist-covered mountains"
              width={2400}
              height={1600}
            />
          }
          caption="Mist"
        />
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-RMAKCQmu-gI-unsplash.jpg"
              alt="A dark Arctic fox sitting in snow, by Jonatan Pie"
              width={4000}
              height={2667}
            />
          }
          caption="Dark fox"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};

/** Edge to edge, with up to 4 images per row. */
export const FullWidth: Story = {
  args: { fullwidth: true },
  render: (args) => (
    <ImageGallery {...args}>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/church-mountain-waterfall.jpg"
              alt="A small white church below misty mountains and a waterfall"
              width={2400}
              height={1600}
            />
          }
          caption="Church"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-BaDjCICkyag-unsplash.jpg"
              alt="Eucalyptus stems in a terracotta vase against a white wall, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="Eucalyptus"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-gTv6Zm54tLY-unsplash.jpg"
              alt="A cup of coffee on a wooden table beside a linen cloth, by Sixteen Miles Out"
              width={2400}
              height={1920}
            />
          }
          caption="Coffee"
        />
        <ImageGalleryItem
          image={
            <img
              src="/red-cabin-pond.jpg"
              alt="A red cabin beside a pond in a flat, frosty field"
              width={1755}
              height={2576}
            />
          }
          caption="Pond"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-oDfeFV-Y2v0-unsplash.jpg"
              alt="A lit candle and dried flowers on a windowsill at dusk, by Sixteen Miles Out"
              width={1920}
              height={2400}
            />
          }
          caption="Candle"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-A9W4Nor4QT8-unsplash.jpg"
              alt="A mug of tea on a white blanket with fairy lights, beside an open book, by Sixteen Miles Out"
              width={2400}
              height={1600}
            />
          }
          caption="Tea"
        />
        <ImageGalleryItem
          image={
            <img
              src="/sixteen-miles-out-3ZvHsFiZyME-unsplash.jpg"
              alt="An open book and a notebook with a pen on a bed, beside a tray with coffee and greenery, by Sixteen Miles Out"
              width={1600}
              height={2400}
            />
          }
          caption="Journal"
        />
      </ImageGalleryRow>
      <ImageGalleryRow>
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-RMAKCQmu-gI-unsplash.jpg"
              alt="A dark Arctic fox sitting in snow, by Jonatan Pie"
              width={4000}
              height={2667}
            />
          }
          caption="Dark fox"
        />
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
              alt="An Arctic fox in the snow, by Jonatan Pie"
              width={3253}
              height={3842}
            />
          }
          caption="Portrait"
        />
        <ImageGalleryItem
          image={
            <img
              src="/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg"
              alt="A white Arctic fox curled in snow, looking left, by Jonatan Pie"
              width={6000}
              height={4000}
            />
          }
          caption="White fox"
        />
      </ImageGalleryRow>
    </ImageGallery>
  ),
};
