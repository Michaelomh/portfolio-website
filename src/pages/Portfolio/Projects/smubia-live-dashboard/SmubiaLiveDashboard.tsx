import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { ReactMarkdownEditor } from '../../../../components/MarkdownEditor/ReactMarkdownEditor';
import smubiaImage from './smubia-1.jpg';
import smubiaImage2 from './smubia-2.jpg';
import { ProjectContainer } from '../../../../components/ProjectContainer';

const markdown = `
# Overview

**Description:** A dashboard showing a live visualisation of students who are joining SMU Business Intelligence and Analytics Club (SMUBIA). The data is obtained directly from Google Sheets, and updated by long polling (5 seconds). This dashboard is mobile friendly and responsive to most resolutions. This dashboard was shown during Singapore Management University (SMU)'s CCA fair. 

**Outcomes:** As a result of the various marketing strategies and this real time dashboard, we have reached a total of 250 member sign ups as a result.

**Tools Used:** HTML/CSS, JavaScript, jQuery, Adobe Photoshop, Google Sheets APIs

**Visualisation URL (no data):** [https://smubia.github.io/SMUBIA-VivaceAnalytics](https://smubia.github.io/SMUBIA-VivaceAnalytics)
`;

export const SmubiaLiveDashboard = () => {
  return (
    <ProjectContainer
      headerText="SMUBIA Live Analytics Dashboard"
      subheaderText="12 Aug 2017"
    >
      <ReactMarkdownEditor>{markdown}</ReactMarkdownEditor>
      <Image src={smubiaImage} alt="Sample dashboard visualisation" pt={8} />
      <Text textStyle="image-caption">Sample dashboard visualisation</Text>
      <Image
        src={smubiaImage2}
        alt="Dashboard in action during CCA fair"
        pt={8}
        m="0px auto"
        w="600px"
      />
      <Text textStyle="image-caption">Dashboard in action!</Text>
    </ProjectContainer>
  );
};
