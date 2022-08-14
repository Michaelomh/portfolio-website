import React from 'react';
import { ChakraComponent, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type AboutLinkType = {
  icon: ChakraComponent<typeof Icon> | IconType;
  href: URL;
  text?: string;
};
