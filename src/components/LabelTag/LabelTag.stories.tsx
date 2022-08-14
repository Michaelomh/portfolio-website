import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { LabelTag } from './LabelTag';

export default {
  title: 'Component/LabelTag',
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
  component: LabelTag,
  argTypes: {
    size: {
      description: 'size of `LabelTag`',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    variant: {
      description: 'Variant of `LabelTag`',
      options: ['subtle', 'solid', 'outline'],
      defaultValue: 'subtle',
    },
    text: {
      description: 'text to display for `LabelTag`',
      type: 'string',
      defaultValue: 'LabelTag',
    },
    colorScheme: {
      description: 'text to display for `LabelTag`',
      options: [
        'whiteAlpha',
        'blackAlpha',
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
        'linkedin',
        'facebook',
        'messenger',
        'whatsapp',
        'twitter',
        'telegram',
      ],
      defaultValue: 'gray',
    },
  },
} as ComponentMeta<typeof LabelTag>;

const Template: ComponentStory<typeof LabelTag> = ({ ...args }) => (
  <LabelTag {...args} />
);

export const LabelTagStory = Template.bind({});
LabelTagStory.storyName = 'LabelTag';
