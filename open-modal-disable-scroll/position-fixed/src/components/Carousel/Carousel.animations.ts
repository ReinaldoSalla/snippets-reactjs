import { config } from 'react-spring';

const carouselTransitionProps: any = {
  config: {
    mass: 5,
    tension: 50,
    friction: 26,
    clamp: true
  },
  trail: 1000,
  from: { 
    transform: 'scale(0.1)', 
    opacity: 0 
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)'
  },
  leave: {
    opacity: 0,
    transform: 'scale(2)'
  }
};

const getspring = (isSidebarVisible) => ({
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

export { 
  carouselTransitionProps,
  getspring 
};