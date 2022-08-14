import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { PortfolioPanel } from './';
import preview from './preview.jpg';

export default {
  title: 'Component/PortfolioPanel',
  decorators: [
    (Story) => (
      <Box w="350px">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  component: PortfolioPanel,
  argTypes: {
    image: {
      description: 'Preview image for the project.',
      defaultValue: preview,
    },
    imageAlt: {
      description: 'Alt attribute for image for the project.',
      defaultValue: '',
      controls: 'string',
    },
    title: {
      description: 'Title of project.',
      defaultValue: 'Title',
    },
    description: {
      description: 'Short description of project.',
      defaultValue: 'Description',
    },
    tags: {
      description: 'Tags related to the project',
      defaultValue: [],
    },
    date: {
      description: 'Date of when the project was completed.',
      defaultValue: new Date(),
    },
    url: {
      description: 'URL of the project to navigate to.',
    },
  },
} as ComponentMeta<typeof PortfolioPanel>;

const Template: ComponentStory<typeof PortfolioPanel> = ({ ...args }) => (
  <PortfolioPanel {...args} />
);

export const PortfolioPanelStory = Template.bind({});
PortfolioPanelStory.storyName = 'PortfolioPanel';
