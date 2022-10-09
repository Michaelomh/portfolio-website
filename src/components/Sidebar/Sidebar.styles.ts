export const sidebarContainer = {
  w: 'full',
  h: ['80px', '92px', 'full'],
  bgColor: 'grey',
};

export const sidebarBranding = {
  wrapper: {
    px: 4,
    py: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desktopLogo: {
    h: [null, '60px', 'full'],
    display: ['none', 'block'],
  },
  mobileLogo: {
    h: '48px',
    display: ['block', 'none'],
  },
  iconButton: {
    color: 'white',
    fontSize: '2.5em',
    _hover: { bgColor: 'transparent' },
    _active: { bgColor: 'transparent' },
    m: 0,
    variant: 'ghost',
    display: ['block', 'block', 'none'],
  },
};

export const sidebarLinks = {
  container: {
    bottom: [null, null, 0],
    bgColor: 'grey',
    pl: [0, 0, 4],
    pb: 4,
    pt: 4,
    w: ['full', 'full', '25%'],
  },
  links: {
    color: 'white',
    textStyle: 'navigation',
    fontSize: ['2rem', '2rem', '3rem'],
    lineHeight: ['2.5rem', '2.5rem', '3.5rem'],
    _hover: { color: 'orange', cursor: 'pointer' },
  },
  link: {
    color: 'white',
    _hover: { color: 'orange' },
  },
};
