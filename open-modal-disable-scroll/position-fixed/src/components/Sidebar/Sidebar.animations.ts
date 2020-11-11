import { config } from 'react-spring';

const getSpring = (isSidebarVisible, springRef) => ({
  config: config.slow,
  ref: springRef,
  from: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)'
  },
  to: async (next) => {
    await next({
      opacity: isSidebarVisible ? 1 : 0,
      transform: isSidebarVisible ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
    });
  }
});

const getTransitions = (isSidebarVisible, transitionsRef) => ({
  ref: transitionsRef,
  unique: true,
  trail: isSidebarVisible ? 200 : 100,
  from: { opacity: 0, transform: 'scale(0.9)' },
  enter: { opacity: 1, transform: 'scale(1)' },
  leave: { opacity: 0, transform: 'scale(0.9)' }
});

export { getSpring, getTransitions };