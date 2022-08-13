import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { Home } from './Home';

export default {
  title: 'Page/Home',
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
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const HomeStory = Template.bind({});
HomeStory.storyName = 'Home';
