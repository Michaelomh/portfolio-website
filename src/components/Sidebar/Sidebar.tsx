import React from 'react';
import {
  Box,
  Text,
  Image,
  Link,
  IconButton,
  useBoolean,
  useMediaQuery,
  SlideFade,
} from '@chakra-ui/react';
import Logo from './full-logo.png';
import MobileLogo from './mobile-logo.png';
import * as styles from './Sidebar.styles';
import { navigationType } from './Sidebar.types';
import { HiOutlineMenu } from 'react-icons/hi';

export const Sidebar = ({ navigationItems }: navigationType) => {
  const [isDesktopView] = useMediaQuery('(min-width: 1280px)');
  const [showNavigation, setShowNavigation] = useBoolean(false);
  console.log(isDesktopView);

  return (
    <Box {...styles.sidebarContainer}>
      <Box {...styles.sidebarBranding.wrapper}>
        <Link href="/">
          <>
            <Image
              src={Logo}
              alt="Datayse Logo"
              objectFit="cover"
              {...styles.sidebarBranding.desktopLogo}
            />

            <Image
              src={MobileLogo}
              alt="Datayse Logo"
              {...styles.sidebarBranding.mobileLogo}
            />
          </>
        </Link>

        <IconButton
          icon={<HiOutlineMenu />}
          aria-label="toggle mobile navigation"
          onClick={setShowNavigation.toggle}
          {...styles.sidebarBranding.iconButton}
        />
      </Box>
      {isDesktopView ? (
        <Links navigationItems={navigationItems} />
      ) : (
        <SlideFade in={showNavigation} offsetY="-20px" reverse unmountOnExit>
          <Links navigationItems={navigationItems} />
        </SlideFade>
      )}
    </Box>
  );
};

const Links = ({ navigationItems }: navigationType) => {
  return (
    <Box
      pos="absolute"
      textAlign={['center', 'center', 'left']}
      {...styles.sidebarLinks.container}
    >
      {navigationItems &&
        navigationItems.map((navigationItem) => {
          return (
            <Text
              noOfLines={1}
              {...styles.sidebarLinks.links}
              key={navigationItem.name}
            >
              {navigationItem.link ? (
                <Link href={navigationItem.link} variant="link-white">
                  {navigationItem.name}
                </Link>
              ) : (
                <>{navigationItem.name}</>
              )}
            </Text>
          );
        })}
    </Box>
  );
};
