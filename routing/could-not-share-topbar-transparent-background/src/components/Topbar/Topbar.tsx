import React, { 
  useEffect,
  useState,
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarItemContainer,
  TopbarLink,
  TopbarText,
  TopbarFillerWrapper
} from './Topbar.styles';
import { useSpring } from 'react-spring';
import TopbarProps from './Topbar.interfaces';
import { useLocation } from 'react-router-dom';
import { ReactComponent as SidebarSvg } from '../../assets/icons/sidebar.svg';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import Icon from '../Icon';

const TopbarSidebar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}): JSX.Element => {
  const iconAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: async (next) => {
      await next({ transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)' })
    }
  });
  return (
    <TopbarItemContainer onClick={toggleSidebar}>                      
      <TopbarFillerWrapper>
        <Icon 
          style={iconAnimation}
          svg={SidebarSvg} 
          color='white' 
          width='2rem'
          height='2rem' 
          padding='0'
          border='none'
        />      
      </TopbarFillerWrapper>
      <TopbarText> Contents </TopbarText>
    </TopbarItemContainer>
  );
};

interface TopbarHomeProps {
  onClickHome: () => void;
}

const TopbarHome: FunctionComponent<TopbarHomeProps> = (props) => {
  const { pathname } = useLocation();
  // const onClick = () => {
  //   pathname === '/'
  //     ? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  //     : window.scrollTo(0, 0);
  // };
  return (
    <TopbarLink to='/' onClick={props.onClickHome}>
      <Icon 
        svg={JavaScriptSvg} 
        color='white'
        width='2.5rem' 
        height='2.5rem' 
        padding='0'
        border='none'
      />
      <TopbarText> JavaScript </TopbarText>
    </TopbarLink>
  )
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => {
  const { pathname } = useLocation();
  const [isInExtremeTop, setIsInExtremeTop] = useState<boolean>(pathname === '/');
  const [isInGeneralTop, setIsInGeneralTop] = useState<boolean>(pathname === '/');

  const onScroll = () => {
    setIsInExtremeTop(window.pageYOffset <= 50 && pathname === '/');
    setIsInGeneralTop(window.pageYOffset <= 200 && pathname === '/');
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  });

  const onClickHome = () => {
    setIsInExtremeTop(true);
    setIsInGeneralTop(true);
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      : window.scrollTo(0, 0);
  };

  const animationTop = useSpring({
    config: { mass: 10, tension: 170, friction: 26, clamp: true },
    background: isInExtremeTop ? 'rgba(0, 0, 0, 0)' : 'black'
  });

  const animationNotTop = useSpring({
    config: { duration: 1 },
    background: 'black'
  });

  const animation = isInGeneralTop ? animationTop : animationNotTop;

  return (
    <TopbarContainer style={animation}>
      <TopbarSidebar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <TopbarHome onClickHome={onClickHome}/>
      <TopbarItemContainer>
        <Icon 
          svg={SearchSvg} 
          color='white' 
          width='2.5rem'
          height='2.5rem'
          padding='0'
          border='none'
        />
        <TopbarText> Search</TopbarText>
      </TopbarItemContainer>
      <TopbarItemContainer>
        <TopbarFillerWrapper>
          <Icon 
            svg={ProfileSvg} 
            color='white'
            width='2rem'
            height='2rem'
            padding='0'
            border='none'
          />
        </TopbarFillerWrapper>
        <TopbarText> Profile </TopbarText>
      </TopbarItemContainer>
    </TopbarContainer>
  );
};

export default Topbar;