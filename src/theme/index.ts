import { extendTheme } from '@chakra-ui/react';
import '@fontsource/jost';
import '@fontsource/inter';

import { colors } from './colors';
import { fonts, textStyles } from './typography';
import { Link } from './components/Link';
import { breakpoints } from './breakpoints';

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  breakpoints,
  components: {
    Link,
  },
});

export default theme;
