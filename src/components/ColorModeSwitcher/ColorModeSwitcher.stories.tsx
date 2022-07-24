import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default {
  title: "Component/ColorModeSwitcher",
  component: ColorModeSwitcher,
  argTypes: {
    sx: {
      description: "escape hatch to pass a CSS property",
      control: "none",
    },
  },
} as ComponentMeta<typeof ColorModeSwitcher>;

const Template: ComponentStory<typeof ColorModeSwitcher> = (args) => <ColorModeSwitcher {...args} />;

export const ColorModeSwitcherTemplate = Template.bind({});
ColorModeSwitcherTemplate.storyName = "ColorModeSwitcher";
