import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { ReactMarkdownEditor } from '../../../../components/MarkdownEditor/ReactMarkdownEditor';
import iotImage1 from './iot-project-1.png';
import iotImage2 from './iot-project-2.png';
import iotImage3 from './iot-project-3.png';
import { ProjectContainer } from '../../../../components/ProjectContainer';

const markdown = `
# Overview

**Description:**  Project Eye’ OT is an Internet Of Things (IoT) solution which aims to reduce the number of unreturned trolleys using a low cost and reliable solution. Utilising BLE beacon technology and proximity sensors (Raspberry pi), Eye’ OT tracks shopping trolleys and takes actions once it leaves the premises. We have created a dashboard for Enforcement officers Managers to have an overview of the entire situation and make any necessary changes. (deploy enforcement officers to specific places at certain timings).

**Tools Used:** HTML/CSS, JavaScript, jQuery, Java (backend for app), MySQL, D3.js.

**Visualisation URL (no data):** [Iot Shopping Cart Dashboard](https://michaelomh.github.io/Iot_dashboard/)
`;

export const IotDashboard = () => {
  return (
    <ProjectContainer
      headerText="IOT Shopping Cart Misuse Dashboard"
      subheaderText="10 Apr 2017"
    >
      <ReactMarkdownEditor>{markdown}</ReactMarkdownEditor>
      <Image
        src={iotImage1}
        alt="IOT Shopping trolley misuse dashboard"
        m="0px auto"
        w="600px"
        pt={8}
      />
      <Text textStyle="image-caption">
        IOT shopping trolley misuse dashboard
      </Text>
      <Image src={iotImage2} alt="Eye-OT team" pt={8} m="0px auto" w="600px" />
      <Text textStyle="image-caption">The Eye-OT team!</Text>
      <Image
        src={iotImage3}
        alt="Image of RaspberryPi build"
        pt={8}
        m="0px auto"
        w="600px"
      />
      <Text textStyle="image-caption">Our RaspberryPi build</Text>
    </ProjectContainer>
  );
};
