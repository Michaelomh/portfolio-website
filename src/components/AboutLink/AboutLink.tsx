import React from 'react';
import { Text, Link, Icon, Center } from '@chakra-ui/react';
import * as styles from './AboutLink.styles';
import { AboutLinkType } from './AboutLink.types';

export const AboutLink = ({ icon, href, text }: AboutLinkType) => {
  return (
    <Link href={href} isExternal variant="link-black">
      <Center flexDir="column">
        <Icon as={icon} boxSize="128px" />
        {text && <Text {...styles.AboutLinkText}>{text}</Text>}
      </Center>
    </Link>
  );
};
