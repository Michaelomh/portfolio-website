import React from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Portfolio } from './pages/Portfolio/Portfolio';
import theme from './theme/index';
import { Sidebar } from './components/Sidebar/Sidebar';
import { navigationItem } from './components/Sidebar/Sidebar.types';
import './App.css';
import { SmubiaLiveDashboard } from './pages/Portfolio/Projects/smubia-live-dashboard/SmubiaLiveDashboard';
import { IotDashboard } from './pages/Portfolio/Projects/iot-shopping-cart/IotDashboard';
import { OnliveShowcase } from './pages/Portfolio/Projects/onlive/OnliveShowcase';
import { DomesticFlightsDashboard } from './pages/Portfolio/Projects/analyzing-domestic-us-flights/DomesticFlightsDashboard';
import { Blog } from './pages/Blog/Blog';
import { PageNotFound } from './components/PageNotFound';

const navigationItems: navigationItem[] = [
  { name: 'About Me', link: '/about' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
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
          <Route path="blog" element={<Blog />} />
          <Route
            path="projects/smubia-live-dashboard"
            element={<SmubiaLiveDashboard />}
          />
          <Route path="projects/iot-shopping-cart" element={<IotDashboard />} />
          <Route
            path="projects/analyzing-domestic-us-flights"
            element={<DomesticFlightsDashboard />}
          />
          <Route path="projects/onlive" element={<OnliveShowcase />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GridItem>
    </Grid>
  </ChakraProvider>
);
