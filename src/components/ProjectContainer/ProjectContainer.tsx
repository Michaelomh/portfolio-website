import React, { PropsWithChildren } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import * as styles from './ProjectContainer.styles';
import { Header } from '../Header';
import { ProjectContainerType } from './ProjectContainer.types';

export const ProjectContainer = ({
  headerText,
  subheaderText,
  children,
}: PropsWithChildren<ProjectContainerType>) => {
  return (
    <Flex flexDir="column" overflowY="auto" {...styles.ProjectContainer}>
      <Header headerText={headerText} subheaderText={subheaderText} />
      <Box {...styles.ProjectMarkdownContainer}>{children}</Box>
    </Flex>
  );
};
