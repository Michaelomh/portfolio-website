import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { ReactMarkdownEditor } from '../../../../components/MarkdownEditor/ReactMarkdownEditor';
import vaImage1 from './va-image-1.jpg';
import vaImage2 from './va-image-2.png';
import { ProjectContainer } from '../../../../components/ProjectContainer';

const markdown = `
# Overview

**Description:**  This dashboard is created for the class, IS428 Visual Analytics and Business Intelligence. This dashboard is for airlines to view the various passengers travelling within the United States in 2015. We hope that this dashboard can help airline companies with planning and optimizing their routes to ensure a full load of passengers, as well as finding new routes to offer to passengers.

**Tools Used:** HTML/CSS, JavaScript, jQuery, Adobe Photoshop, D3.js, Python (Data Cleaning)

**Visualisation URL (no data):** [Air Travel Dashboard](https://michaelomh.github.io/VAFinalProj/)
`;

export const DomesticFlightsDashboard = () => {
  return (
    <ProjectContainer
      headerText="Visualising domestic US air travel dashboard"
      subheaderText="29 Jan 2017"
    >
      <ReactMarkdownEditor>{markdown}</ReactMarkdownEditor>
      <Image
        src={vaImage2}
        alt="Air Travel Dashboard"
        m="0px auto"
        w="600px"
        pt={8}
      />
      <Text textStyle="image-caption">Air Travel Dashboard</Text>
      <Image src={vaImage1} alt="VA team" pt={8} m="0px auto" w="600px" />
      <Text textStyle="image-caption">The team!</Text>
    </ProjectContainer>
  );
};
