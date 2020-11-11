import React, { 
  useState, 
  useEffect,
  useRef, 
  FunctionComponent,
  MutableRefObject 
} from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText
} from './ContentNavigation.styles';
import { ContentNavigationProps } from './ContentNavigation.types';
import { 
  getTextAnimation,
  getCircleAnimation
} from './ContentNavigation.animations';

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLDivElement>, 
  rootMargin: string = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver= () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin: `${-300-100}px 0px 0px 0px`, threshold: 0 });
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

const ContentNavigation: FunctionComponent<ContentNavigationProps> = ({
  isIntroIntersecting,
  isSetupIntersecting,
  isJsxIntersecting,
  isStylingIntersecting,
  isUseStateIntersecting,
  isUseReducerIntersecting,
  isFinalCodeIntersecting,
  scrollToIntro,
  scrollToSetup,
  scrollToJsx,
  scrollToStyling,
  scrollToUseState,
  scrollToUseReducer,
  scrollToFinalCode,
  isSidebarVisible,
  topRef,
}): JSX.Element => {

  const navDomNode = useRef<HTMLDivElement>(null!);

  const isIntersecting = useIntersectionObserver(navDomNode);

  const { pathname, hash } = useLocation();

  const introCircleAnimation = useSpring(getCircleAnimation(isIntroIntersecting));
  const setupCircleAnimation = useSpring(getCircleAnimation(isSetupIntersecting, isIntroIntersecting));
  const jsxCircleAnimation = useSpring(getCircleAnimation(isJsxIntersecting, isSetupIntersecting));
  const stylingCircleAnimation = useSpring(getCircleAnimation(isStylingIntersecting, isJsxIntersecting));
  const useStateCircleAnimation = useSpring(getCircleAnimation(isUseStateIntersecting, isStylingIntersecting));
  const useReducerCircleAnimation = useSpring(getCircleAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  const finalCodeCircleAnimation = useSpring(getCircleAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));
  
  const introTextAnimation = useSpring(getTextAnimation(isIntroIntersecting));
  const setupTextAnimation = useSpring(getTextAnimation(isSetupIntersecting, isIntroIntersecting));
  const jsxTextAnimation = useSpring(getTextAnimation(isJsxIntersecting, isSetupIntersecting));
  const stylingTextAnimation = useSpring(getTextAnimation(isStylingIntersecting, isJsxIntersecting));
  const useStateTextAnimation = useSpring(getTextAnimation(isUseStateIntersecting, isStylingIntersecting));
  const useReducerTextAnimation = useSpring(getTextAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  const finalCodeTextAnimation = useSpring(getTextAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));

  useEffect(() => {
    const goToBlock = () => {
      switch (hash) {
        case '#intro':
          return scrollToIntro();
        case '#setup':
          return scrollToSetup();
        case '#jsx':
          return scrollToJsx();
        case '#styling':
          return scrollToStyling();
        case '#useState':
          return scrollToUseState();
        case '#useReducer':
          return scrollToUseReducer();
        case '#final-code':
          return scrollToFinalCode();
        default:
          return window.scroll(0, 0);      
      }
    }
    goToBlock();
  }, []);

  return (
    <ContentNavigationWrapper 
      isSidebarVisible={isSidebarVisible}
      isIntersecting={isIntersecting}
      top={topRef.current}
      ref={navDomNode}
    >
      <ContentNavigationItem
        to={`${pathname}#intro`}
        onClick={scrollToIntro}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={introCircleAnimation} />
        <ContentNavigationText style={introTextAnimation}>
          1. Intro
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#setup`}
        onClick={scrollToSetup}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={setupCircleAnimation}/>
        <ContentNavigationText style={setupTextAnimation}>
          2. Setup
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#jsx`}
        onClick={scrollToJsx}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={jsxCircleAnimation}/>
        <ContentNavigationText style={jsxTextAnimation}>
          3. JSX
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#styling`}
        onClick={scrollToStyling}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={stylingCircleAnimation}/>
        <ContentNavigationText style={stylingTextAnimation}>
          4. Styling
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#useState`}
        onClick={scrollToUseState}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle  style={useStateCircleAnimation}/>
        <ContentNavigationText style={useStateTextAnimation}>
          5. useState
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#useReducer`}
        onClick={scrollToUseReducer}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={useReducerCircleAnimation}/>
        <ContentNavigationText style={useReducerTextAnimation}>
          6. useReducer
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem 
        to={`${pathname}#final-code`} 
        onClick={scrollToFinalCode}
        $isSidebarVisible={isSidebarVisible}
      >
        <ContentNavigationCircle style={finalCodeCircleAnimation}/>
        <ContentNavigationText style={finalCodeTextAnimation}>
          7. Final Code
        </ContentNavigationText>
      </ContentNavigationItem>
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;