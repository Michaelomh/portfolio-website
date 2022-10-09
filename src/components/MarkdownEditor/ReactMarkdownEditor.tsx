import React from 'react';
import { Box, SpaceProps as ChakraSpaceProps } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const ReactMarkdownEditor = ({ children, ...args }: props) => {
  return (
    <Box {...args}>
      <ReactMarkdown
        className="markdown"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

type props = MarginProps &
  PaddingProps & {
    children: string;
  };

export type MarginProps = Pick<
  ChakraSpaceProps,
  | 'm'
  | 'margin'
  | 'mt'
  | 'marginBlockStart'
  | 'marginTop'
  | 'mr'
  | 'marginInlineEnd'
  | 'marginEnd'
  | 'me'
  | 'marginRight'
  | 'mb'
  | 'marginBlockEnd'
  | 'marginBottom'
  | 'ml'
  | 'marginInlineStart'
  | 'marginStart'
  | 'ms'
  | 'marginLeft'
  | 'mx'
  | 'marginInline'
  | 'marginX'
  | 'my'
  | 'marginBlock'
  | 'marginY'
>;

export type PaddingProps = Pick<
  ChakraSpaceProps,
  | 'p'
  | 'padding'
  | 'pt'
  | 'paddingBlockStart'
  | 'paddingTop'
  | 'pr'
  | 'paddingInlineEnd'
  | 'paddingEnd'
  | 'pe'
  | 'paddingRight'
  | 'pb'
  | 'paddingBlockEnd'
  | 'paddingBottom'
  | 'pl'
  | 'paddingInlineStart'
  | 'paddingStart'
  | 'ps'
  | 'paddingLeft'
  | 'px'
  | 'paddingInline'
  | 'paddingX'
  | 'py'
  | 'paddingBlock'
  | 'paddingY'
>;

export type SpaceProps = ChakraSpaceProps;
