import React, { useEffect, useState, FunctionComponent } from 'react';
import {
	TopbarContainer,
	TopbarInnerWrapper,
	TopbarItemContainer,
	TopbarLink,
	TopbarText,
  TopbarFillerWrapper,
  TopbarItemFiller
} from './Topbar.styles';
import { useSpring } from 'react-spring';
import { TopbarProps, TopbarSidebarProps } from './Topbar.interfaces';
import { useLocation } from 'react-router-dom';
import { ReactComponent as SidebarSvg } from '../../assets/icons/sidebar.svg';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import Icon from '../Icon';

const TopbarSidebar: FunctionComponent<TopbarSidebarProps> = ({
	isSidebarVisible,
  toggleSidebar,
}): JSX.Element => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
	const iconAnimation = useSpring({
		from: { transform: 'rotate(0deg)' },
		to: async (next) => {
			await next({
				transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)',
			});
		},
  });
  const hoverAnimation = useSpring({
    from: {
      width: '0%'
    },
    to: async (next) => {
      await next({
        width: isHovering ? '25%' : '0%'
      });
    }
  });
	return (
    <TopbarItemContainer 
      onClick={toggleSidebar}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
			<TopbarFillerWrapper>
				<Icon
					style={iconAnimation}
					svg={SidebarSvg}
					color="white"
					width="2rem"
					height="2rem"
					padding="0"
          border="none"
          zIndex={2}
				/>
			</TopbarFillerWrapper>
			<TopbarText> Contents </TopbarText>
      <TopbarItemFiller style={hoverAnimation}/>
		</TopbarItemContainer>
	);
};

const TopbarHome: FunctionComponent = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const hoverAnimation = useSpring({
    from: {
      width: '0%'
    },
    to: async (next) => {
      await next({
        width: isHovering ? '25%' : '0%'
      });
    }
  });
	const { pathname } = useLocation();
	const onClick = () => {
		pathname === '/'
			? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
			: window.scrollTo(0, 0);
	};
	return (
    <TopbarLink 
      to="/" 
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
			<Icon
				svg={JavaScriptSvg}
				color="white"
				width="2.5rem"
				height="2.5rem"
				padding="0"
        border="none"
        zIndex={2}
			/>
			<TopbarText> JavaScript </TopbarText>
      <TopbarItemFiller style={hoverAnimation} />
		</TopbarLink>
	);
};

const TopbarSearch = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const hoverAnimation = useSpring({
    from: {
      width: '0%'
    },
    to: async (next) => {
      await next({
        width: isHovering ? '25%' : '0%'
      });
    }
  });  
  return (
    <TopbarItemContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <Icon
        svg={SearchSvg}
        color="white"
        width="2.5rem"
        height="2.5rem"
        padding="0"
        border="none"
        zIndex={2}
      />
      <TopbarText> Search </TopbarText>
      <TopbarItemFiller style={hoverAnimation}/>
    </TopbarItemContainer>
  );
};

const TopbarProfile = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const hoverAnimation = useSpring({
    from: {
      width: '0%'
    },
    to: async (next) => {
      await next({
        width: isHovering ? '25%' : '0%'
      });
    }
  });  
  return (
    <TopbarItemContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <TopbarFillerWrapper>
        <Icon
          svg={ProfileSvg}
          color="white"
          width="2rem"
          height="2rem"
          padding="0"
          border="none"
          zIndex={2}
        />
      </TopbarFillerWrapper>
      <TopbarText> Profile </TopbarText>
      <TopbarItemFiller style={hoverAnimation}/>
    </TopbarItemContainer>
  )
}

const Topbar: FunctionComponent<TopbarProps> = ({
	isSidebarVisible,
	toggleSidebar,
}): JSX.Element => {
  const [isInTop, setIsInTop] = useState<boolean>(window.pageYOffset <= 50);
  const { pathname } = useLocation();

	const onScroll = () => {
		setIsInTop(window.pageYOffset <= 50);
  };

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.addEventListener('scroll', onScroll);
	});

	const animation = useSpring({
		height: isInTop ? '0px' : '80px',
  });
  
	return (
		<TopbarContainer>
			<TopbarSidebar
				isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
			/>
			<TopbarHome />
      <TopbarSearch />
			<TopbarProfile />
			<TopbarInnerWrapper style={pathname === '/' ? animation : {height: '80px'}} />
		</TopbarContainer>
	);
};

export default Topbar;
