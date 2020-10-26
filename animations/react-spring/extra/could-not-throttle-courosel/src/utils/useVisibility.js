import {
  useState,
  useEffect,
  useCallback,
  createRef
} from "react";

const useVisibilityTimeOnce = offset => {
  const [isVisible, setIsVisible] = useState(false);
  const [wasAlreadyVisible, setWasAlreadyVisible] = useState(false);   
  const currentElement = createRef(null);

  const checkIsVisible = useCallback(top => (
    top + offset >= 0 && top + offset <= window.innerHeight
  ), [offset]);

  useEffect(() => {
    if (!wasAlreadyVisible) {
      const intervalId = setInterval(() => {
        setIsVisible(checkIsVisible(
          currentElement.current?.getBoundingClientRect().top
        ));
      }, 100);
      if (isVisible) setWasAlreadyVisible(true);
      return () => clearInterval(intervalId);
    }
  }, [checkIsVisible, currentElement, isVisible, wasAlreadyVisible]);

  return [isVisible, currentElement];
};

export default useVisibilityTimeOnce;