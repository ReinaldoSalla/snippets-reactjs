import {
  useState,
  useEffect,
  createRef
} from "react";
import throttle from "./throttle";

const useVisibilityScrollOnce = offset => {
  const [isVisible, setIsVisible] = useState(false);
  const [finishOperation, setFinishOperation] = useState(false);
  const currentElement = createRef(null);

  const checkIsVisible = top => 
    top + offset >= 0 && top + offset <= window.innerHeight

  const onScroll = throttle(() => {
    setIsVisible(checkIsVisible(
      currentElement.current?.getBoundingClientRect().top
    ));
    if (isVisible) setFinishOperation(true);
  }, 100);

  useEffect(() => {
    if (!finishOperation) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  });

  return [isVisible, currentElement];
};

export default useVisibilityScrollOnce;