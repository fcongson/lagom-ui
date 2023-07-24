import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container } from "../Container";
import { Section } from "./Section";

const meta: Meta = {
  title: "Layouts/Section",
  component: Section,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  render: () => (
    <>
      <Section borderStyle="dashed" borderColor="violets.2">
        <Container borderStyle="dashed" borderColor="violets.2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis
          parturient montes nascetur. Blandit massa enim nec dui nunc. Egestas
          purus viverra accumsan in nisl nisi scelerisque eu ultrices. Odio eu
          feugiat pretium nibh ipsum consequat nisl vel pretium. Sed nisi lacus
          sed viverra tellus in hac habitasse. Ut pharetra sit amet aliquam id
          diam maecenas ultricies mi. Nulla at volutpat diam ut venenatis tellus
          in metus. Proin sed libero enim sed faucibus turpis in eu. Dui id
          ornare arcu odio ut sem nulla pharetra. Elit at imperdiet dui accumsan
          sit amet. Sagittis aliquam malesuada bibendum arcu vitae elementum
          curabitur vitae.
        </Container>
      </Section>
      <Section borderStyle="dashed" borderColor="violets.2">
        <Container borderStyle="dashed" borderColor="violets.2">
          Molestie a iaculis at erat pellentesque. Dolor purus non enim praesent
          elementum. Turpis massa sed elementum tempus egestas sed sed risus.
          Erat imperdiet sed euismod nisi. Dictum non consectetur a erat nam.
          Tincidunt praesent semper feugiat nibh sed pulvinar. Cursus mattis
          molestie a iaculis at erat pellentesque. Sit amet venenatis urna
          cursus eget nunc scelerisque viverra mauris. Adipiscing at in tellus
          integer feugiat scelerisque. Porta lorem mollis aliquam ut porttitor
          leo. Nibh cras pulvinar mattis nunc sed blandit libero. Tincidunt
          praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.
          Fringilla ut morbi tincidunt augue interdum.
        </Container>
      </Section>
      <Section borderStyle="dashed" borderColor="violets.2">
        <Container borderStyle="dashed" borderColor="violets.2">
          Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum
          arcu. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac
          ut. Imperdiet sed euismod nisi porta lorem mollis aliquam ut
          porttitor. Integer eget aliquet nibh praesent tristique magna sit amet
          purus. Pharetra magna ac placerat vestibulum lectus mauris ultrices
          eros in. Commodo viverra maecenas accumsan lacus vel facilisis
          volutpat est velit. Tristique magna sit amet purus. Aenean sed
          adipiscing diam donec adipiscing tristique risus. Ac tortor vitae
          purus faucibus ornare. Senectus et netus et malesuada fames ac turpis.
          Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
        </Container>
      </Section>
    </>
  ),
};
