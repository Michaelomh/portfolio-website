export const portfolioPage = {
  w: ['100vw', 'full'],
  h: ['calc(100vh - 80px)', 'calc(100vh - 92px)', '100vh'],
  alignItems: 'center',
};

export const portfolioContainer = {
  h: 'full',
  pt: [0, 0, 8],
};

export const portfolioProjects = {
  templateColumns: ['1fr', 'repeat(2, 1fr)'],
  gap: 8,
  maxW: '960px',
  h: [
    'calc(100vh - 80px - 180px)',
    'calc(100vh - 92px - 180px)',
    'calc(100vh - 180px - 180px)',
  ],
  px: 4,
  pt: 4,
};
