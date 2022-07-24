import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
