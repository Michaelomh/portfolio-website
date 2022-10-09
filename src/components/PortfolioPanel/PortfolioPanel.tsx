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
  url = '#',
}: PortfolioPanelType) => {
  return (
    <Link variant="link-noChange" href={url}>
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
          <Flex alignItems="center" gap={4}>
            <Text textStyle="heading2" noOfLines={1} flex={1} title={title}>
              {title}
            </Text>

            <Text textStyle="body2" fontStyle="italic">
              {formatDate(date)}
            </Text>
          </Flex>
          <Text textStyle="body2" noOfLines={4} my={4}>
            {description}
          </Text>
          <Flex {...styles.PortfolioPanelTagContainer} wrap="wrap">
            {tags &&
              tags.map((tag) => (
                <Tag size="sm" key={tag} variant="solid">
                  {tag}
                </Tag>
              ))}
            <Spacer />
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};
