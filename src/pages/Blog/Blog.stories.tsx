import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { Blog } from './Blog';

export default {
  title: 'Page/Blog',
  decorators: [
    (Story) => (
      <Box height="100vh">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
  },
  component: Blog,
} as ComponentMeta<typeof Blog>;

const Template: ComponentStory<typeof Blog> = () => <Blog />;

export const BlogStory = Template.bind({});
BlogStory.storyName = 'Blog';
