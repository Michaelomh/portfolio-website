import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher/ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import theme from './theme/index';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher sx={{ color: 'purple-dark' }} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </ChakraProvider>
);
