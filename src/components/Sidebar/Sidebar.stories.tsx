import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Box } from '@chakra-ui/react';
import { navigationItem } from './sidebar.types';

export default {
  title: 'Component/Sidebar',
  decorators: [
    (Story) => (
      <Box height="100vh">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const navigationItems: navigationItem[] = [
  { name: 'About Me' },
  { name: 'Portfolio' },
  { name: 'Timeline' },
  { name: 'Search' },
];

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar navigationItems={navigationItems} />
);

export const SidebarStory = Template.bind({});
SidebarStory.storyName = 'Sidebar';
