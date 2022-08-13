import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@chakra-ui/react';
import { Header } from '.';

export default {
  title: 'Component/Header',
  decorators: [
    (Story) => (
      <Flex w="full" justifyContent="center">
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  component: Header,
  argTypes: {
    headerText: {
      description: 'header text to display for `Header`',
      type: 'string',
      defaultValue: 'header',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...args }) => (
  <Header {...args} />
);

export const HeaderStory = Template.bind({});
HeaderStory.storyName = 'Header';
