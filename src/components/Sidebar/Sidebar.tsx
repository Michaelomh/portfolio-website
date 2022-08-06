import React from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/react';
import Logo from './avatar.png';
import * as styles from './Sidebar.styles';
import { navigationType } from './sidebar.types';

export const Sidebar = ({ navigationItems }: navigationType) => {
  return (
    <Box {...styles.sidebarContainer}>
      <Box {...styles.sidebarLogoWrapper}>
        <Image src={Logo} alt="Datayse Logo" objectFit="cover" />
      </Box>
      <Box pos="absolute" {...styles.sidebarNavigationContainer}>
        {navigationItems &&
          navigationItems.map((navigationItem) => {
            return (
              <Text
                noOfLines={1}
                {...styles.sidebarNavigation}
                key={navigationItem.name}
              >
                <Link href={navigationItem.link} {...styles.sidebarLink}>
                  {navigationItem.name}
                </Link>
              </Text>
            );
          })}
      </Box>
    </Box>
  );
};
