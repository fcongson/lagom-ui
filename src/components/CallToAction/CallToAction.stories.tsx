import React from "react";
import { CallToAction } from "./CallToAction";

export default {
  title: "Components/Call To Action",
  component: CallToAction,
  tags: ["autodocs"],
};

export const Default = () => (
  <CallToAction
    header="Lorem Ipsum."
    text="With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    actionLink="/?path=/story/components-calltoaction--default"
    actionText="Lorem ipsum dolor sit amet"
  />
);
