import React, { 
  useState, 
  useEffect, 
  useRef,
  MutableRefObject 
} from 'react';
import { useSpring } from 'react-spring';
import {
  ContentWrapper,
  ContentDivisible,
  ContentTitle,
  ContentContainer
} from './Content.styles';
import { getSpring } from './Content.animations';
import ContentCore from '../ContentCore';
import ContentNavigation from '../ContentNavigation';
import useScrollToElement from '../../hooks/useScrollToElement';

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLElement>, 
  rootMargin: string = '-200px'
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver= () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin: rootMargin, threshold: 0 });
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

const Content = ({ isSidebarVisible, topRef, closeSidebar }) => {
  const introDomNode = useRef<HTMLElement>(null!);
  const setupDomNode = useRef<HTMLElement>(null!);
  const jsxDomNode = useRef<HTMLElement>(null!);
  const stylingDomNode = useRef<HTMLElement>(null!);
  const useStateDomNode = useRef<HTMLElement>(null!);
  const useReducerDomNode = useRef<HTMLElement>(null!);
  const finalCodeDomNode = useRef<HTMLElement>(null!);

  const scrollToIntro = useScrollToElement(introDomNode, -10);
  const scrollToSetup = useScrollToElement(setupDomNode, -10);
  const scrollToJsx = useScrollToElement(jsxDomNode, -10);
  const scrollToStyling = useScrollToElement(stylingDomNode, -10);
  const scrollToUseState = useScrollToElement(useStateDomNode, -10);
  const scrollToUseReducer = useScrollToElement(useReducerDomNode, -10);
  const scrollToFinalCode = useScrollToElement(finalCodeDomNode, -10);

  const isIntroIntersecting = useIntersectionObserver(introDomNode, '-100px');
  const isSetupIntersecting = useIntersectionObserver(setupDomNode);
  const isJsxIntersecting = useIntersectionObserver(jsxDomNode);
  const isStylingIntersecting = useIntersectionObserver(stylingDomNode);
  const isUseStateIntersecting = useIntersectionObserver(useStateDomNode);
  const isUseReducerIntersecting = useIntersectionObserver(useReducerDomNode);
  const isFinalCodeIntersecting = useIntersectionObserver(finalCodeDomNode);

  const spring = useSpring(getSpring(isSidebarVisible));
  
  return (
    <main>
      <ContentWrapper 
        style={spring} 
        $isSidebarVisible={isSidebarVisible}
        onClick={closeSidebar}  
      >
        <ContentContainer>
          <ContentDivisible $isSidebarVisible={isSidebarVisible}>
            <ContentCore 
              introDomNode={introDomNode}
              setupDomNode={setupDomNode}
              jsxDomNode={jsxDomNode}
              stylingDomNode={stylingDomNode}
              useStateDomNode={useStateDomNode}
              useReducerDomNode={useReducerDomNode}
              finalCodeDomNode={finalCodeDomNode}
              isSidebarVisible={isSidebarVisible}
            />
          </ContentDivisible>
          <ContentNavigation 
            isIntroIntersecting={isIntroIntersecting}
            isSetupIntersecting={isSetupIntersecting}
            isJsxIntersecting={isJsxIntersecting}
            isStylingIntersecting={isStylingIntersecting}
            isUseStateIntersecting={isUseStateIntersecting}
            isUseReducerIntersecting={isUseReducerIntersecting}
            isFinalCodeIntersecting={isFinalCodeIntersecting}
            scrollToIntro={scrollToIntro}
            scrollToSetup={scrollToSetup}
            scrollToJsx={scrollToJsx}
            scrollToStyling={scrollToStyling}
            scrollToUseState={scrollToUseState}
            scrollToUseReducer={scrollToUseReducer}
            scrollToFinalCode={scrollToFinalCode}
            isSidebarVisible={isSidebarVisible}
            topRef={topRef}
          />
        </ContentContainer>
      </ContentWrapper>
    </main>
  );
};

export default Content;