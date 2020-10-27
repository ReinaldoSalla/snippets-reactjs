import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { 
  ButtonContainer,
  Button,
  Menu 
} from './Sidebar.styles';

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleClick = () => setIsSidebarActive(!isSidebarActive);

  const transitions = useTransition(isSidebarActive, null, {
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
  });

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleClick}>content</Button>
      </ButtonContainer>
      {transitions.map(({ item, key, props }) => (
        item && <Menu key={key} style={props} />
      ))}
    </>
  );
};

export default Sidebar;