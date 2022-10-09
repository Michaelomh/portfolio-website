import React from 'react';
import { Image, Text, Box } from '@chakra-ui/react';
import { ReactMarkdownEditor } from '../../../../components/MarkdownEditor/ReactMarkdownEditor';
import { ProjectContainer } from '../../../../components/ProjectContainer';
import onliveVideo1 from './onlive-video-1.mp4';
import onliveVideo2 from './onlive-video-2.mp4';
import onliveVideo3 from './onlive-video-3.mp4';
import onliveImage1 from './onlive-image-1.jpg';
import onliveImage2 from './onlive-image-2.png';
import onliveImage3 from './onlive-image-3.jpg';

const markdown = `
# Overview

**Description:** In my 2nd year in SMU, I interned in a IT Events Company, Onlive.io (formally ZeguestList), as a Full Stack Developer. This Scandinavian-owned company provides IT events solutions that such as Events Application, Online Registration, Check-in and Badging, Photo Kiosk, Spotify Jukebox, event website creation and management, etc. I was fortunate to be there to learn so much about the MICE industry.

Throughout my internship, I’ve been brought to many big client meetings to discuss about the solution the company provides. This companies range from small companies to Multinational Companies (IBM, MasterCard, George P. Johnson). From understanding the clients’ needs and translating into IT events solutions, I’ve learnt how to communicate better and think in terms of the client to provide better solutions. Seeing my work live was really fulfilling.

**Outcomes:** I’ve learnt many things while interning at the company. I’ve learnt hard skills such as front-end tools (HTML, CSS, JavaScript and jQuery), improved my back-end expertise on PHP and learnt more about communicating and understanding clients to build solutions that go beyond their expectations.

**Tools Used:** HTML/CSS, JavaScript, jQuery, PHP, Building Wordpress Websites and Communicating with Clients.

**Internship Poster:** If you wish to have an overiew of my intership, you can view it here.

## Top 3 Internship showcase
`;

const MastercardMarkdown = `### Mastercard's World Cities 2016
**Description:** Created a beautiful visual when a user check-in to the event using their personalized RFID-enabled Smart City Pass. In addition, created a landing page for Mastercard's world cities page for users to sign up for the event.`;

const IbmMarkdown = `### IBM Chief Marketing Officer Event
**Description:** Created a sign up page that uses IBM Watson's personality insights service to figure out the attendee's personality based on their online footprint. Using this data, created a fun visualisation of the total makeup of the attendees. Furthermore, created a 'jukebox' which allows users to connect to Spotify and select songs for the event.`;

const dgfxMarkdown = `### DGFX Studio website redesign
**Description:** Converted a WIX website into a HTML/CSS/JavaScript website. View the website [here](https://dgfxstudio.com.sg/)`;

export const OnliveShowcase = () => {
  return (
    <ProjectContainer
      headerText="Onlive.io Showcase"
      subheaderText="01 Aug 2016"
    >
      <ReactMarkdownEditor>{markdown}</ReactMarkdownEditor>
      <ReactMarkdownEditor mt={8}>{MastercardMarkdown}</ReactMarkdownEditor>
      <Image
        src={onliveImage1}
        alt="Image of check-in booth"
        pt={8}
        m="0px auto"
        w="600px"
      />
      <Text textStyle="image-caption">Check-in booth</Text>
      <Box m="0px auto" w="400px">
        <video controls muted loop>
          <source src={onliveVideo1} type="video/mp4" />
        </video>
      </Box>

      <ReactMarkdownEditor mt={8}>{IbmMarkdown}</ReactMarkdownEditor>

      <Image
        src={onliveImage2}
        alt="Image of pre-event website personality identifier"
        pt={8}
        m="0px auto"
      />
      <Text textStyle="image-caption">
        Pre-event website personality identifier
      </Text>

      <Image
        src={onliveImage3}
        alt="image of jukebox and playlist"
        pt={8}
        m="0px auto"
      />
      <Text textStyle="image-caption">Jukebox + Playlist</Text>

      <Box m="0px auto" w="400px">
        <video controls muted loop>
          <source src={onliveVideo3} type="video/mp4" />
        </video>
      </Box>
      <Text textStyle="image-caption">Jukebox in action</Text>

      <Box m="0px auto" w="400px">
        <video controls muted loop>
          <source src={onliveVideo2} type="video/mp4" />
        </video>
      </Box>
      <Text textStyle="image-caption">
        Visualisation of breakdown of attendees&apos; personalities
      </Text>

      <ReactMarkdownEditor mt={8}>{dgfxMarkdown}</ReactMarkdownEditor>
    </ProjectContainer>
  );
};
