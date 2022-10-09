import React from 'react';
import { Flex, Text, Image, Link } from '@chakra-ui/react';
import * as styles from './Home.styles';
import michael from './michael.png';

export const Home = () => {
  return (
    <Flex {...styles.homeContainer} flexDir="column">
      <Flex flexDir={['column', 'row']} alignItems="center">
        <Text {...styles.homeText.black}>Designer By heart,&nbsp;</Text>
        <Text {...styles.homeText.orange}>Developer By choice</Text>
      </Flex>
      <Image
        src={michael}
        boxSize="30%"
        width="auto"
        alt="Michael Ong"
        borderRadius="full"
        my={4}
      />
      <Text {...styles.homeText.black} align="center">
        Hey! I&apos;m Michael, take a look at my
      </Text>
      <Text {...styles.homeText.black} align="center">
        <>
          <Link href="/projects">Projects</Link>,{' '}
          <Link href="/timeline">Timeline</Link> or more{' '}
          <Link href="/about">About Me</Link>.
        </>
      </Text>
    </Flex>
  );
};
