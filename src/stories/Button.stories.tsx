import { ComponentStory, ComponentMeta } from "@storybook/react";
import { string } from "prop-types";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    children: {
      type: "string",
      defaultValue: "button",
    },
    labelColor: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.storyName = "Button controls";
