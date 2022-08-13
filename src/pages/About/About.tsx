import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import * as styles from './About.styles';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceSquare,
} from 'react-icons/ai';
import { SiTableau } from 'react-icons/si';
import { AboutLink } from '../../components/AboutLink';
import { Header } from '../../components';

export const About = () => {
  return (
    <Flex flexDir="column" {...styles.aboutPage}>
      <Header headerText="About" />
      <Flex {...styles.aboutContainer} flexDir="column">
        <Box {...styles.aboutTextContainer}>
          <Text textStyle="body-text">
            Hello! My name is Michael, living in Singapore. Currently, I am
            working in J.P. Morgan Chase under Software Engineering Program
            2018. I have a HUGE passion for Software Development and Data
            Analytics. On my free time, I love to explore my creative side with
            graphic design or website design. I graduated in 2018 from SMU with
            a Bachelor degree in Information Systems, with a second major in
            Advanced Analytics.
          </Text>
          <br />
          <Text textStyle="body-text">
            I consider myself as a person hungry for knowledge, always looking
            to be a better version of myself, while at the same time continuing
            to have fun in life. In my free time, I love to read books, take
            online courses and keep fit. For a more professional side of me,
            take a look at my resume.
          </Text>
        </Box>
        <Box textAlign="center">
          <Text textStyle="heading1" mb={8}>
            Check out my other links
          </Text>
          <Flex gap={12}>
            <AboutLink
              href="https://www.linkedin.com/in/michaelomh/"
              icon={AiFillLinkedin}
              text="Linkedin"
            />

            <AboutLink
              href="https://github.com/Michaelomh"
              icon={AiFillGithub}
              text="Github"
            />

            <AboutLink
              href="https://public.tableau.com/app/profile/ong.ming.hao#!/"
              icon={SiTableau}
              text="Tableau"
            />
            <AboutLink
              href="https://www.behance.net/MichaelOMH"
              icon={AiFillBehanceSquare}
              text="behance"
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
