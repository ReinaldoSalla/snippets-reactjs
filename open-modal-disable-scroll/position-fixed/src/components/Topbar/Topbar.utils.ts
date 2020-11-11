const scrollAccordingToLocation = (pathname) => {
  pathname === '/'
    ? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    : window.scroll({ top: 0, left: 0 })
};

export { scrollAccordingToLocation };