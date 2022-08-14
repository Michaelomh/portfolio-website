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

export const Portfolio = () => {
  return (
    <Flex {...styles.portfolioPage} flexDir="column">
      <Header headerText="Portfolio" />
      <Flex {...styles.portfolioContainer} flexDir="column" gap={8}>
        <Box h="180px"></Box>
        <Grid {...styles.portfolioProjects} overflowY="auto">
          <GridItem>
            <PortfolioPanel
              image={barImage}
              imageAlt={'Image of Bar website'}
              title={'Bar website redesign'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={sissWebsiteImage}
              imageAlt={'Image of SMU SISS website'}
              title={'SMU SISS website redesign'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={datayseImage}
              imageAlt={'Image of datayse website'}
              title={'datayse.com'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={smubiaImage}
              imageAlt={'Image of SMUBIA Live Dashboard'}
              title={'SMUBIA live dashboard'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={iotImage}
              imageAlt={'Image of Shopping Cart Misuse Dashboard'}
              title={'Shopping cart misuse dashboard'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={vaImage}
              imageAlt={'Image of Bar website'}
              title={'US domestic flight passengers dashboard'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
          <GridItem>
            <PortfolioPanel
              image={onliveImage}
              imageAlt={'Image of Onlive logo'}
              title={'onlive.io Showcase'}
              description={'Some Description'}
              date={new Date(2022, 0, 1)}
              url={new URL('https://example.com')}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};
