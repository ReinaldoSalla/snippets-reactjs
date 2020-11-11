import { MutableRefObject } from 'react';

const useScrollToElement = (
  elRef: MutableRefObject<HTMLElement>, 
  offset: number = 0
): () => void => {
  const scrollToElement = () => {
    window.scrollTo(0, elRef.current?.offsetTop + offset);
  }
  return scrollToElement;
};

export default useScrollToElement;