import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { About } from './About';

export default {
  title: 'Page/About',
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
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const AboutStory = Template.bind({});
AboutStory.storyName = 'About';
