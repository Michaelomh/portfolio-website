import React from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import * as styles from './Portfolio.styles';
import { Header, PortfolioPanel } from '../../components';
import barImage from './Projects/bar-website/restaurant-app.png';
import smubiaImage from './Projects/smubia-live-dashboard/VA-SMUBIA.jpg';
import sissWebsiteImage from './Projects/siss-website-redesign/ellipsisC5.jpg';
import onliveImage from './Projects/onlive/onlive_Showcase.jpg';
import iotImage from './Projects/iot-shopping-cart/iot-project.jpg';
import datayseImage from './Projects/datayse/Datayse_Project.jpg';
import vaImage from './Projects/analyzing-domestic-us-flights/VA_project.jpg';

const BASE_URL = 'http://www.datayse.com';

export const Portfolio = () => {
  return (
    <Flex {...styles.portfolioPage} flexDir="column">
      <Header headerText="Portfolio" />
      <Flex {...styles.portfolioContainer} flexDir="column" gap={8}>
        <Box h="180px"></Box>
        <Grid {...styles.portfolioProjects} overflowY="auto">
          <GridItem>
            <PortfolioPanel
              image={datayseImage}
              imageAlt={'Image of datayse website'}
              title={'Portfolio website (datayse.com)'}
              description={
                'Developed an updated portfolio page to showcase all my work with updated technologies.'
              }
              tags={['React', 'HTML/CSS', 'Typescript', 'Figma']}
              date={new Date(2022, 0, 9)}
              url={new URL('', BASE_URL)}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={barImage}
              imageAlt={'Image of Bar website'}
              title={'Bar/Restaurant website'}
              description={
                'Developed a restaurant application for a restaurant/bar as part of some freelance work.'
              }
              tags={['React', 'Next.js', 'HTML/CSS', 'Javascript', 'Figma']}
              date={new Date(2020, 0, 1)}
              url={new URL('https://marvelous-crepe-bbd4f4.netlify.app/')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={sissWebsiteImage}
              imageAlt={'Image of SMU SISS website'}
              title={'Winner of SMU SISS website redesign'}
              description={
                'Won 1st place on a coding challenge to redesign a website in 2 days. Worked on the entire wireframe and development of the website by myself.'
              }
              tags={['jQuery', 'Javascript', 'HTML/CSS']}
              date={new Date(2018, 0, 7)}
              url={
                new URL(
                  'https://michaelomh.github.io/SIS_Metamorphosis_coding_challenge/'
                )
              }
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={smubiaImage}
              imageAlt={'Dashboard visualisation of SMUBIA Live Dashboard'}
              title={'SMUBIA live dashboard'}
              description={
                'Designed and developed a dashboard which displays live data when students sign up for SMU business intelligence and analytics club.'
              }
              tags={[
                'jQuery',
                'Javascript',
                'D3.js',
                'HTML/CSS',
                'Google Sheets',
              ]}
              date={new Date(2017, 0, 8)}
              url={new URL('', BASE_URL)}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={iotImage}
              imageAlt={
                'Dashboard visualisation of Shopping Cart Misuse Dashboard'
              }
              title={'Shopping cart misuse dashboard'}
              description={
                'Designed and developed an application to reduce the number of unreturned trolleys. Utilizing beacons & Raspberry PI to track shopping trolleys and display information on a meaningful dashboard for the client.'
              }
              tags={[
                'jQuery',
                'Javascript',
                'D3.js',
                'HTML/CSS',
                'Java',
                'SQL',
              ]}
              date={new Date(2017, 0, 4)}
              url={new URL('', BASE_URL)}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={vaImage}
              imageAlt={
                'Dashboard visualisation of passengers on US domestic flights in 2015'
              }
              title={'US domestic flight passengers dashboard'}
              tags={['jQuery', 'Javascript', 'D3.js', 'HTML/CSS']}
              description={
                'Created a dashboard to view various passengers travelling within United States in 2015. Helping airline companies to plan and optimize their flight routes, as well as finding new routes to offer passengers.'
              }
              date={new Date(2017, 0, 1)}
              url={new URL('', BASE_URL)}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={onliveImage}
              imageAlt={'Onlive logo, the company that I was interning with'}
              title={'Onlive.io Showcase'}
              tags={['jQuery', 'Javascript', 'PHP', 'HTML/CSS']}
              description={
                'Showcase a selection of work done for Onlive.io (formally known as ZeGuestList). ZeGuestList is an IT solution agency in the MICE industry creating custom projects for various events.'
              }
              date={new Date(2016, 0, 8)}
              url={new URL('', BASE_URL)}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};
