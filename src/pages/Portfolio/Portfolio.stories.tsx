import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { Portfolio } from './Portfolio';

export default {
  title: 'Page/Portfolio',
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
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = () => <Portfolio />;

export const PortfolioStory = Template.bind({});
PortfolioStory.storyName = 'Portfolio';
