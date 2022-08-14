import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import * as styles from './Header.styles';

type HeaderType = {
  headerText: string;
};

export const Header = ({ headerText }: HeaderType) => {
  return (
    <Box textAlign="center" pos="fixed" {...styles.HeaderContainer}>
      <Text {...styles.HeaderText}>{headerText}</Text>
    </Box>
  );
};
