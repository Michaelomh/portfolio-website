import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import * as styles from './Header.styles';

type HeaderType = {
  headerText: string;
  subheaderText?: string;
};

export const Header = ({ headerText, subheaderText }: HeaderType) => {
  return (
    <Box textAlign="center" {...styles.HeaderContainer}>
      <Text {...styles.HeaderText}>{headerText}</Text>
      {subheaderText && <Text {...styles.SubheaderText}>{subheaderText}</Text>}
    </Box>
  );
};
