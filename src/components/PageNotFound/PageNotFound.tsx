import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import * as styles from './PageNotFound.styles';

export const PageNotFound = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <Flex flexDir="column" overflowY="auto" {...styles.PageNotFoundContainer}>
      <Text textStyle="heading1" fontSize="5em" mb={4}>
        404
      </Text>
      <Text textStyle="heading1" fontSize="2em">
        Page not found
      </Text>
      <Text textStyle="heading3">
        The page you are looking for doesn&apos;t exist.
      </Text>
      <Button onClick={handleClick} mt={4} size="lg" bgColor="orange">
        Go back to Home
      </Button>
    </Flex>
  );
};
