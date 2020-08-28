import React, { 
  useEffect,
  useState,
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarInnerWrapper,
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


const TopbarHome: FunctionComponent = () => {
  const { pathname } = useLocation();
  const onClick = () => {
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      : window.scrollTo(0, 0);
  };
  return (
    <TopbarLink to='/' onClick={onClick}>
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
  const [isInTop, setIsInTop] = useState<boolean>(window.pageYOffset <= 50);

  const onScroll = () => {
    setIsInTop(window.pageYOffset <= 50);
  };

  // scroll
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  });

  // back button
  useEffect(() => {
    setIsInTop(window.pageYOffset <= 50);
  }, []);

  const animation = useSpring({
    height: isInTop ? '0px' : '80px'
  });

  return (
    <TopbarContainer>
      <TopbarSidebar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <TopbarHome />
      <TopbarItemContainer>
        <Icon 
          svg={SearchSvg} 
          color='white' 
          width='2.5rem'
          height='2.5rem'
          padding='0'
          border='none'
        />
        <TopbarText> Search </TopbarText>
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
      <TopbarInnerWrapper style={animation}/>      
    </TopbarContainer>
  );
};

export default Topbar;