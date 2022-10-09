import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import * as styles from './Blog.styles';
import { Header } from '../../components';

export const Blog = () => {
  return (
    <Flex flexDir="column" {...styles.blogPage}>
      <Header headerText="Blog" />
      <Flex {...styles.blogContainer} flexDir="column">
        <Text>No blog found!</Text>
      </Flex>
    </Flex>
  );
};
