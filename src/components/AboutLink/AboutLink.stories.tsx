import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { AboutLink } from './AboutLink';
import { AiFillHeart } from 'react-icons/ai';

export default {
  title: 'Component/AboutLink',
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  component: AboutLink,
  argTypes: {
    icon: {
      description: 'Icon to display',
      defaultValue: AiFillHeart,
    },
    href: {
      description: 'external link to move to when `AboutLink` is clicked',
      action: 'navigating to another page',
    },
    text: {
      description: 'text to display for `AboutLink`',
      type: 'string',
      defaultValue: 'About Link Text',
    },
  },
} as ComponentMeta<typeof AboutLink>;

const Template: ComponentStory<typeof AboutLink> = ({ ...args }) => (
  <AboutLink {...args} />
);

export const AboutLinkStory = Template.bind({});
AboutLinkStory.storyName = 'AboutLink';
