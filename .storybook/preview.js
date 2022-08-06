import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  controls: { expanded: true },
  storySort: {
    order: ['Components'],
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
