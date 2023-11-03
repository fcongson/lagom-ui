import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container } from "../../layouts/Container/Container.js";
import { Section } from "../../layouts/Section/Section.js";
import { Quote } from "./Quote.js";

const meta: Meta = {
  title: "Components/Quote",
  component: Quote,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  render: () => (
    <Section>
      <Container>
        <Quote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis
            dis parturient montes nascetur. Blandit massa enim nec dui nunc.
            Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.
            Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sed
            nisi lacus sed viverra tellus in hac habitasse. Ut pharetra sit amet
            aliquam id diam maecenas ultricies mi. Nulla at volutpat diam ut
            venenatis tellus in metus. Proin sed libero enim sed faucibus turpis
            in eu. Dui id ornare arcu odio ut sem nulla pharetra. Elit at
            imperdiet dui accumsan sit amet. Sagittis aliquam malesuada bibendum
            arcu vitae elementum curabitur vitae.
          </p>
        </Quote>
      </Container>
    </Section>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Section>
      <Container>
        <Quote>
          <p>Short quote.</p>
        </Quote>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Quote>
          <p>
            Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Quote>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
  ),
};
