export const portfolioPage = {
  alignItems: 'center',
  w: 'full',
  h: 'full',
};

export const portfolioContainer = {
  h: 'full',
  pt: 8,
};

export const portfolioProjects = {
  templateColumns: 'repeat(2, 1fr)',
  gap: 8,
  maxW: '960px',
  h: 'calc(100vh - 180px - 180px)',
  px: 4,
  pt: 4,
  css: {
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'grey',
      borderRadius: '24px',
    },
  },
};
