const getHoverAnimation = (isHovering) => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : { mass: 2, tension: 140, friction: 26 , clamp: true },
  from: { width: '0%' },
  to: async (next) => {
    await next({ width: isHovering ?  '25%' : '0%' });
  }
});

export { getHoverAnimation };