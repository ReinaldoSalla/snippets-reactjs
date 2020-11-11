const getCarouselItemProps = (isHovering: boolean): any => ({
  textShadow: isHovering
    ? '1px 1px 2px white, 0 0 1em white, 0 0 1px white'
    : '0px 0px 0px white, 0 0 0em white, 0 0 0px white'
});

export default getCarouselItemProps;
