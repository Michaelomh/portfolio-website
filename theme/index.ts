import { extendTheme } from "@chakra-ui/react";
import "@fontsource/jost";
import "@fontsource/inter";

import colors from "./colors";
import { fonts, textStyles } from "./typography";

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
});

export default theme;
