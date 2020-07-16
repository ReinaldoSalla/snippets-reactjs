import React, { 
  useEffect,
  Fragment,
  FunctionComponent
 } from 'react';
import { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
} from './Sidebar.styles';
import { 
  SidebarItemsProps,
  SidebarItemProps,
  SidebarContent,
  SidebarProps
} from './Sidebar.interfaces';
import { useSpring, config } from 'react-spring';

const sidebarContent: SidebarContent = {
  react: {
    title: 'React',
    items: [
      'Rendering',
      'Styling',
      'State and Props',
      'Side Effects',
      'Refs',
      'Memoization',
      'Routing',
      'Plots',
      'Animation',
      'Graphics',
      'Videos',
    ]
  },
  javascript: {
    title: 'Vanilla JavaScript',
    items: [
      'Data Structures',
      'Functions',
      'Conditionals and Loops',
      'Map, Filter and Reduce',
      'Iterators and Generators',
      'Closures',
      'Asyncronous Programming'
    ]
  },
  typescript: {
    title: 'Vanilla TypeScript',
    items: [
      'Types and Interfaces',
      'Generics',
      'Decorators'
    ]
  },
  backend: {
    title: 'Backend',
    items: [
      'Node',
      'GraphQL',
      'MongoDB',
      'Auth'
    ]
  },
  mobile: {
    title: 'Mobile',
    items: [
      'React Native',
      'Sharing Code',
      'Push Notifications',
      'Camera'
    ],
  },
  projects: {
    title: 'Full Fledged Projects',
    items: [
      'Portfolio',
      'Ecommerce',
      'News',
      'Social Media',
      'Getting Hired'
    ],
  }
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ 
  item 
}): JSX.Element => (
  <SidebarTextContainer>{item}</SidebarTextContainer>
);

const SidebarItems: FunctionComponent<SidebarItemsProps> = ({ 
  title, 
  items 
}): JSX.Element => (
  <Fragment>
    <SidebarTitleContainer>{title}</SidebarTitleContainer>
    {items.map((item, index) => 
      <SidebarItem key={index} item={item} />
    )}
  </Fragment>
);

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
  const sidebarAnimation = useSpring({
    marginLeft: isSidebarVisible ? '0px' : '-235px',
    config: config.wobbly
    // opacity: isSidebarVisible ? 1 : 0
  });
  return (
    <SidebarContainer style={sidebarAnimation}>
      <SidebarItems
        title={sidebarContent.react.title}
        items={sidebarContent.react.items}
      />
      <SidebarItems
        title={sidebarContent.javascript.title}
        items={sidebarContent.javascript.items}
      />
      <SidebarItems
        title={sidebarContent.typescript.title}
        items={sidebarContent.typescript.items}
      />
      <SidebarItems 
        title={sidebarContent.backend.title} 
        items={sidebarContent.backend.items}
      />
      <SidebarItems
        title={sidebarContent.mobile.title}
        items={sidebarContent.mobile.items}
      />
      <SidebarItems
        title={sidebarContent.projects.title}
        items={sidebarContent.projects.items}
      />
    </SidebarContainer>
  );
};

export default Sidebar;