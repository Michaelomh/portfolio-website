import React from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Portfolio } from './pages/Portfolio/Portfolio';
import theme from './theme/index';
import { Sidebar } from './components/Sidebar/Sidebar';
import { navigationItem } from './components/Sidebar/Sidebar.types';
import { ProjectIot } from './pages/Portfolio/Projects/iot-shopping-cart/IotPorfolio';
import './App.css';

const navigationItems: navigationItem[] = [
  { name: 'About Me', link: '/about' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Timeline', link: '/timeline' },
  { name: 'Search', link: '/search' },
];

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid w="100vw" h="100vh" templateColumns="25% 75%" overflow="hidden">
      <GridItem>
        <Sidebar navigationItems={navigationItems} />
      </GridItem>
      <GridItem>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="projects/iot-shopping-cart" element={<ProjectIot />} />
        </Routes>
      </GridItem>
    </Grid>
  </ChakraProvider>
);
