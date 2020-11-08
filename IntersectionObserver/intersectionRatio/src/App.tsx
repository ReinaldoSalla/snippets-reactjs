import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject
} from 'react';
import styled from 'styled-components';

const buildThreshold = () => {
  const length = 300;
  return new Array(length).fill(0).map((_, index) => index / length);
};

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLDivElement>, 
  rootMargin: string = '0px'
) => {
  const [isIntersecting, setIntersecting] = useState<any>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver= () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          console.log(entry.boundingClientRect);          
          // console.log(`${Math.floor(entry.intersectionRatio * 300)}px`);
        }, { root: null, rootMargin: rootMargin, threshold: buildThreshold() });
        return observerRef.current;
      }
      return null;
    };

    const observer = getObserver();
    const localDomNode = domNode.current;
    if (observer !== null) {
      observer.observe(localDomNode);
      return () => observer.unobserve(localDomNode);
    }
  }, [domNode]);

  return isIntersecting;
};

const Wrapper = styled.div`
  height: 300vh;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  margin: 150vh 0 0 0;
  background: black;
`;

export default () => {
  const domNode = useRef<HTMLDivElement>(null!);
  const isIntersecting = useIntersectionObserver(domNode);

  return (
    <Wrapper>
      <Box ref={domNode}/>
    </Wrapper>
  );
};