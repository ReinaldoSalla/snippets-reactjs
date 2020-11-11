const getTopbarAnimation = (isInTop, isSidebarVisible) => ({
  config: isInTop
    ? { mass: 2, tension: 120, friction: 26, clamp: true }
    : { mass: 1, tension: 120, friction: 26 },
  from: { height: '0%' },
  to: async (next) => {
    await next({ 
      height: isInTop && !isSidebarVisible ? '0%' : '100%' });
  }
});

export { getTopbarAnimation };