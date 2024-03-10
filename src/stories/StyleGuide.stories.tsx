import { Meta, StoryObj } from "@storybook/react";
import {
  CallToAction,
  Container,
  FeaturedSection,
  Hero,
  ImageCaption,
  LinkButton,
  PageHeader,
  Quote,
  Section,
  SectionHeader,
} from "..";

const meta: Meta = {
  title: "Style Guide",
};

export default meta;

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";
const image = (
  <img
    src={imageSrc}
    alt={alt}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
);

export const StyleGuide: StoryObj = {
  render: () => (
    <>
      <PageHeader>Style Guide</PageHeader>
      {/* Typography */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Typography</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <Section>
        <Container id="typography">
          <h1>H1 Lorem Ipsum</h1>
          <h2>H2 Lorem Ipsum</h2>
          <h3>H3 Lorem Ipsum</h3>
          <h4>H4 Lorem Ipsum</h4>
          <h5>H5 Lorem Ipsum</h5>
          <h6>H6 Lorem Ipsum</h6>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Paragraph.{" "}
            <a href="style-guide/#typography">Lorem ipsum dolor sit amet</a>,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            <strong>Bold. Lorem ipsum dolor sit amet</strong>
          </p>
          <p>
            <em>Italic. Lorem ipsum dolor sit amet</em>
          </p>
          <p>
            <code>Code. Lorem ipsum dolor sit amet</code>
          </p>
          <p>
            <pre>Preformatted. Lorem ipsum dolor sit amet</pre>
          </p>
        </Container>
      </Section>

      {/* Page Header */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Page Header</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <Section>
        <Container id="page-header">
          <PageHeader>Lorem Ipsum</PageHeader>
        </Container>
      </Section>

      {/* Section Header */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Section Header</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <Section>
        <Container id="section-header">
          <SectionHeader>Lorem Ipsum</SectionHeader>
        </Container>
      </Section>

      {/* Quote */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Quote</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <Section>
        <Container id="quote">
          <Quote>
            <p>Short quote.</p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>
              Medium quote. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>
              Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <h2>Multi-line quote.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </Quote>
        </Container>
      </Section>

      {/* Image Caption */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Image Caption</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <ImageCaption
        image={image}
        caption="Default. Lorem ipsum dolor sit amet"
      />
      <ImageCaption
        image={image}
        caption="Emphasized. Lorem ipsum dolor sit amet"
        emphasized
      />
      <ImageCaption
        image={image}
        caption="Fullwidth. Lorem ipsum dolor sit amet"
        fullwidth
      />

      {/* Featured Section */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Featured Section</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <FeaturedSection image={image} imageAsBackground>
        <p>
          Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </FeaturedSection>
      <FeaturedSection image={image} imageAsBackground framed>
        <p>
          Image Background Framed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>
      <FeaturedSection>
        <p>
          Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </FeaturedSection>
      <FeaturedSection backgroundColor="var(--lagom-semantic-color-accent-bg)">
        {image}
        <p>
          Color Background with Image. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>
      <FeaturedSection
        backgroundColor="var(--lagom-semantic-color-accent-bg)"
        framed
      >
        <p>
          Color Background Framed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>

      {/* Call To Action */}
      <Section>
        <FeaturedSection framed>
          <SectionHeader>Call To Action</SectionHeader>
        </FeaturedSection>
      </Section>
      <Section>
        <Container id="call-to-action">
          <CallToAction
            header="Lorem Ipsum."
            text="With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            actionLink="#call-to-action"
            actionText="Lorem ipsum dolor sit amet"
          />
        </Container>
      </Section>

      {/* Hero */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Hero</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <Hero image={image}>
        <PageHeader>Lorem Ipsum</PageHeader>
      </Hero>

      {/* Link Button */}
      <Section>
        <Container>
          <FeaturedSection framed>
            <SectionHeader>Link Button</SectionHeader>
          </FeaturedSection>
        </Container>
      </Section>
      <LinkButton to="#link-button">Link button</LinkButton>
    </>
  ),
};
