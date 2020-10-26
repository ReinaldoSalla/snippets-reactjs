const throttle = (fn, delay) => {
  let last = 0;
  console.log('does it event get here?????');
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

export default throttle;