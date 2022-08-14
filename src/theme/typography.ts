export const fonts = {
  body: 'Inter, sans-serif',
  heading: 'Jost, sans-serif',
  mono: 'Source Code Pro, monospace',
  inter: 'Inter, sans-serif',
};

// Text styles combine several properties in one block that can be used with
// the `textStyle` prop. One thing of note is that these don't work with the
// `Heading` component, so use `Text` instead.
// Ref: https://chakra-ui.com/docs/features/text-and-layer-styles#text-styles
export const textStyles = {
  heading1: {
    fontFamily: 'heading',
    fontSize: '2em',
    lineHeight: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'grey',
  },
  heading2: {
    fontFamily: 'heading',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  heading3: {
    fontFamily: 'heading',
    fontSize: '20px',
    lineHeight: 6,
    fontWeight: 'medium',
  },
  heading4: {
    fontFamily: 'heading',
    fontSize: '16px',
    lineHeight: 5,
    fontWeight: 'medium',
    letterSpacing: '1.5px',
  },
  'body-text': {
    fontFamily: 'body',
    fontSize: '1.2em',
    lineHeight: 7,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  body2: {
    fontFamily: 'body',
    fontSize: '14px',
    lineHeight: 5,
    fontWeight: 'regular',
  },
  body3: {
    fontFamily: 'body',
    fontSize: '13px',
    lineHeight: 5,
    fontWeight: 'regular',
  },
  'heading-home': {
    fontFamily: 'heading',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    fontSize: '2em',
    color: 'black',
  },
  title: {
    fontFamily: 'heading',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontSize: '3em',
    color: 'grey',
    lineHeight: '1em',
  },
  subtitle: {
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: '1.3em',
    color: 'grey-dark',
    fontStyle: 'italic',
  },
  navigation: {
    fontFamily: 'heading',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
};
