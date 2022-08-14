export const Link = {
  baseStyle: {
    color: 'orange',
    _hover: {
      textDecoration: 'none;',
      color: 'orange-darker',
      cursor: 'pointer',
    },
  },
  variants: {
    'link-white': {
      color: 'white',
      _hover: {
        color: 'orange',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
    'link-black': {
      color: 'black',
      _hover: {
        color: 'orange-dark',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
    'link-noChange': {
      color: 'black',
      _hover: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
  },
};
