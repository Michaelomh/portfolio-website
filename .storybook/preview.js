import '@fontsource/jost';
import '@fontsource/inter';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import '../src/App.css';

export const parameters = {
  controls: { expanded: true },
  storySort: {
    order: ['Components', 'Page'],
  },
  options: {
    showPanel: true,
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
