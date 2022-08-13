import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Box } from '@chakra-ui/react';
import { navigationItem } from './Sidebar.types';

const navigationItems: navigationItem[] = [
  { name: 'About Me' },
  { name: 'Portfolio' },
  { name: 'Timeline' },
  { name: 'Search' },
];

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
  argTypes: {
    navigationItems: {
      description: 'List of navigation for sidebar',
      table: {
        type: {
          summary: 'navigationItem',
          detail: ` navigationItem = {
            name: string;
            link?: string;
          };`,
        },
      },
      control: {
        type: 'object',
      },
      defaultValue: navigationItems,
    },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar navigationItems={navigationItems} />
);

export const SidebarStory = Template.bind({});
SidebarStory.storyName = 'Sidebar';
