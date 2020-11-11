import { config } from 'react-spring';

const getSpring = (isSidebarVisible) => ({
  config: config.slow,
  from: { 
    opacity: isSidebarVisible ? 0.5 : 1 
  },
  to: async (next) => {
    await next({
      opacity: isSidebarVisible ? 0.5 : 1
    });
  },
});

export { getSpring };