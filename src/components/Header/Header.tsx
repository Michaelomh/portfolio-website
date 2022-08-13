import React from 'react';
import { Text, Box } from '@chakra-ui/react';

type HeaderType = {
  headerText: string;
};

export const Header = ({ headerText }: HeaderType) => {
  return (
    <Box pos="fixed" pt={24}>
      <Text textStyle="title">{headerText}</Text>
    </Box>
  );
};
