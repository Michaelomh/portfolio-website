import React from 'react';
import { Link, Box, Image, Text, Tag, Flex, Spacer } from '@chakra-ui/react';
import { PortfolioPanelType } from './PortfolioPanel.types';
import * as styles from './PortfolioPanel.styles';
import { motion } from 'framer-motion';

const formatDate = (date: Date) =>
  `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

export const PortfolioPanel = ({
  image,
  imageAlt,
  title,
  description,
  tags,
  date,
}: PortfolioPanelType) => {
  return (
    <Link variant="link-noChange">
      <Box
        {...styles.PortfolioPanelContainer}
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        animation={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Image
          src={image}
          alt={`portfolio-website-${imageAlt}`}
          objectFit="cover"
          {...styles.PortfolioPanelImage}
        />
        <Box {...styles.PortfolioPanelInformation}>
          <Text textStyle="heading2" noOfLines={1}>
            {title}
          </Text>
          <Text textStyle="body2" noOfLines={4}>
            {description}
          </Text>
          <Flex mt={2}>
            {tags &&
              tags.map((tag) => (
                <Tag size="sm" key={tag} variant="solid">
                  {tag}
                </Tag>
              ))}
            <Spacer />
            <Text textStyle="body2" fontStyle="italic">
              {formatDate(date)}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};
