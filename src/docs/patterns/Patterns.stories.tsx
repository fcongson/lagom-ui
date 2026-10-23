import { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  CallToAction,
  Container,
  FeaturedSection,
  Hero,
  ImageCaption,
  PageHeader,
  Quote,
  Section,
} from "../..";

/**
 * Rendered examples for the Patterns docs pages. Each story mirrors the code
 * example on its pattern page, with the demo photos in place of the example
 * image paths. Keep the two in sync when either changes.
 *
 * Excluded from the AI manifest: these compose many components, and agents
 * get the same code from the pattern pages.
 */
const meta: Meta = {
  title: "Patterns/Examples",
  tags: ["!manifest"],
  parameters: {
    layout: "fullscreen",
    // Render in a fixed-height, scrollable frame on the docs pages, so a
    // full-height Hero doesn't take over the page.
    docs: { story: { inline: false, height: "640px" } },
  },
};

export default meta;

type Story = StoryObj;

// Demo photos in public/. Text over an image needs a calm area behind it:
// these placements were chosen by measuring text contrast at desktop and
// mobile widths. whiteFox is the only photo that keeps the landing page's
// featured band (heading, text, and transparent button) readable at every
// width with today's overlay (see issue #17).
const redCabinsRockyCoast = "/red-cabins-rocky-coast.jpg";
const whiteFox = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const yellowHouseMist = "/yellow-house-mist.jpg";
const whiteHouseReflection = "/white-house-reflection.jpg";
const redCabinPond = "/red-cabin-pond.jpg";
const churchMountainWaterfall = "/church-mountain-waterfall.jpg";

export const PageStructure: Story = {
  name: "Page Structure",
  render: () => (
    <>
      <PageHeader>Page title</PageHeader>

      <Section>
        <Container>
          <p>First block of content.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>A heading</h2>
          <p>Second block of content.</p>
        </Container>
      </Section>

      <FeaturedSection>
        <CallToAction
          header="What next?"
          text="One sentence pointing to the next step."
          actionLink="#"
          actionText="Go to the next page"
        />
      </FeaturedSection>
    </>
  ),
};

export const LandingPage: Story = {
  name: "Landing Page",
  render: () => (
    <>
      <Hero image={<img src={redCabinsRockyCoast} alt="" />} />

      <Section>
        <Container>
          <h1>Hello.</h1>
          <p>A sentence or two about who you are and what’s on this site.</p>
        </Container>
      </Section>

      <FeaturedSection image={<img src={whiteFox} alt="" />} imageAsBackground>
        <CallToAction
          header="Photography."
          text="Places I've been and things I've seen."
          actionLink="#"
          actionText="See my photography"
        />
      </FeaturedSection>

      <FeaturedSection>
        <CallToAction
          header="Work."
          text="What I do, and how I do it."
          actionLink="#"
          actionText="Read about my work"
        />
      </FeaturedSection>
    </>
  ),
};

export const Article: Story = {
  render: () => (
    <>
      <Section>
        <Container>
          <h1>Design Tokens To Dark Mode</h1>
        </Container>
      </Section>

      <ImageCaption
        image={
          <img
            src={yellowHouseMist}
            alt="A yellow wooden house in front of mist-covered mountains"
          />
        }
      />

      <Section>
        <Container>
          <p>An opening paragraph that sets up the post.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Design tokens</h2>
          <p>Body text for this section.</p>
          <Quote>
            <p>A short quotation that supports the point.</p>
          </Quote>
          <p>More body text.</p>
        </Container>
      </Section>

      <ImageCaption
        image={
          <img
            src={whiteHouseReflection}
            alt="A white house on golden grass, reflected in still water"
          />
        }
        caption="A caption adds context, like a title or credit."
        emphasized
      />

      <Section>
        <Container>
          <h2>A closer look</h2>
          <p>Explanation, then code.</p>
          <pre>
            <code>{`--lagom-semantic-color-fg-default: #111111;`}</code>
          </pre>
        </Container>
      </Section>
    </>
  ),
};

export const ContentPage: Story = {
  name: "Content Page",
  render: () => (
    <>
      <Hero image={<img src={redCabinPond} alt="" />}>
        <PageHeader>About.</PageHeader>
      </Hero>

      <Section>
        <Container>
          <h2>Hello, I’m Frank.</h2>
          <p>A few paragraphs about you.</p>
        </Container>
      </Section>

      <ImageCaption
        image={
          <img
            src={churchMountainWaterfall}
            alt="A small white church below misty mountains and a waterfall"
          />
        }
        fullwidth
      />

      <Section>
        <Container>
          <h2>What can you expect here?</h2>
          <p>What the site covers.</p>
        </Container>
      </Section>

      <FeaturedSection>
        <CallToAction
          header="Say hello."
          text="I'd love to hear from you."
          actionLink="#"
          actionText="Get in touch"
        />
      </FeaturedSection>
    </>
  ),
};
