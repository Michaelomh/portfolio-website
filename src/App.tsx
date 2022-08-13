import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import theme from './theme/index';
import { Sidebar } from './components/Sidebar/Sidebar';
import { navigationItem } from './components/Sidebar/Sidebar.types';

const navigationItems: navigationItem[] = [
  { name: 'About Me', link: '/about' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Timeline', link: '/timeline' },
  { name: 'Search', link: '/search' },
];

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex w="100vw" h="100vh">
      <Sidebar navigationItems={navigationItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Flex>
  </ChakraProvider>
);
