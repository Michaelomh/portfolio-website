import React from 'react';
import { Tag, TagLeftIcon } from '@chakra-ui/react';
import { LabelTagType } from './LabelTag.types';
import { AiFillLinkedin } from 'react-icons/ai';

export const LabelTag = ({
  size = 'sm',
  variant = 'subtle',
  text,
  colorScheme,
}: LabelTagType) => {
  return (
    <Tag size={size} variant={variant} colorScheme={colorScheme}>
      {getCategoryIcon(text) && <TagLeftIcon as={getCategoryIcon(text)} />}
      {text}
    </Tag>
  );
};

const getCategoryIcon = (text: string) => {
  console.log(text);
  return AiFillLinkedin;
};

// const getCategoryColor = (text: string) => {
//   console.log(text);
//   return 'grey';
// };
