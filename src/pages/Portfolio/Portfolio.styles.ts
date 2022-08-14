export const portfolioPage = {
  alignItems: 'center',
  w: 'full',
  h: 'full',
};

export const portfolioContainer = {
  h: 'full',
};

export const portfolioProjects = {
  templateColumns: 'repeat(3, 1fr)',
  gap: 8,
  w: '960px',
  h: 'calc(100vh - 180px - 180px)',
  px: 4,
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
