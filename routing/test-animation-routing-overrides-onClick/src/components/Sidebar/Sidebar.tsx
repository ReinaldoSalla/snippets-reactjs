import React, { 
  Fragment,
	FunctionComponent,
	useState
 } from 'react';
import { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer,
} from './Sidebar.styles';
import { 
  SidebarItemsProps,
  SidebarItemProps,
  SidebarProps
} from './Sidebar.interfaces';
import { useSpring } from 'react-spring';
import { Scrollbars } from 'react-custom-scrollbars';
import useHeight from '../../utils/useHeight';
import contents from '../../data/contents';


const useSidebarHeight = ( 
	sidebarOffset: number, 
	sidebarScrollbarOffset: number
): Array<string> => {
	const height = useHeight();
	const topbarHeight = 70;
	return [
		`${height - topbarHeight - sidebarOffset}px`,
		`${height - topbarHeight - sidebarScrollbarOffset}px`
	];
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ 
  item 
}): JSX.Element => (
  <SidebarTextContainer>{item}</SidebarTextContainer>
);

const SidebarItems: FunctionComponent<SidebarItemsProps> = ({ 
  title, 
	items,
	firstTitle
}): JSX.Element => (
  <Fragment>
		{firstTitle 
			? <SidebarTitleContainer firstTitle>{title}</SidebarTitleContainer>
			: <SidebarTitleContainer>{title}</SidebarTitleContainer>
		}
    {items.map((item, index) => 
      <SidebarItem key={index} item={item} />
    )}
  </Fragment>
);

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const [sidebarHeight, sidebarScrollbarHeight] = useSidebarHeight(110, 30);
  const sidebarAnimation = useSpring({
    from: { 
      transform: 'translateX(100px)',
      opacity: 0,
    },
    to: async (next) => {
      await next({ 
        transform: isSidebarVisible ? 'translateX(0%)' : 'translateX(-220%)',
        opacity: isSidebarVisible ? 1 : 0,
      })
    }
	});

	const handleMouseEnter = () => setIsHovering(true);

	const handleMouseLeave = () => setIsHovering(false);

	const renderThumbVertical = ({ style }) => (
		<div style={{ 
			...style, 
			backgroundColor: '#dfcece', 
			opacity: isHovering ? 1 : 0,
			borderRadius: '20px'
		}}	/>
	);

  return (
		<AnimatedSidebarContainer height={sidebarHeight} style={sidebarAnimation}> 
			<Scrollbars 
				style={{ height: sidebarScrollbarHeight, width: '217px' }} 
				renderThumbVertical={renderThumbVertical}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			> 
				<SidebarItems
					firstTitle={true}
					title={contents.javascript.title}
					items={contents.javascript.items}
				/>
				<SidebarItems
					title={contents.typescript.title}
					items={contents.typescript.items}
					/>
				<SidebarItems
					title={contents.react.title}
					items={contents.react.items}
					/>
				<SidebarItems 
					title={contents.backend.title} 
					items={contents.backend.items}
					/>
				<SidebarItems
					title={contents.mobile.title}
					items={contents.mobile.items}
					/>
				<SidebarItems
					title={contents.ai.title}
					items={contents.ai.items}
					/>
				<SidebarItems
					title={contents.projects.title}
					items={contents.projects.items}
				/>
		</Scrollbars>
	</AnimatedSidebarContainer>
  );
};

export default Sidebar;

