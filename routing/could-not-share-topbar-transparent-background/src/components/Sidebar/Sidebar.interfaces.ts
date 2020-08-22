interface SidebarContainerProps {
  readonly height: number;
}

interface SidebarTitleContainerProps {
	readonly firstTitle?: boolean;
}

interface SidebarItemsProps {
  title: string;
	items: Array<string>;
	firstTitle?: boolean;
}

interface SidebarItemProps {
  item: string;
}

interface SidebarProps {
  isSidebarVisible: boolean;
}


export type {
	SidebarContainerProps,
  SidebarTitleContainerProps,
  SidebarItemsProps,
  SidebarItemProps,
  SidebarProps
}