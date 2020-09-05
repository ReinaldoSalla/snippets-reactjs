interface TopbarProps {
	isSidebarVisible: boolean;
	toggleSidebar: () => void;
}

interface TopbarSidebarProps extends TopbarProps {
  handleEnter?: () => void;
  handleLeave?: () => void;
  hoverAnimation?: any;
}

export type { TopbarProps, TopbarSidebarProps };
