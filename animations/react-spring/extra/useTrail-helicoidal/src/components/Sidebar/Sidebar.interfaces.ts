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

interface SidebarContent {
  react: SidebarItemsProps;
  javascript: SidebarItemsProps;
  typescript: SidebarItemsProps;
  backend: SidebarItemsProps;
	mobile: SidebarItemsProps;
	ai: SidebarItemsProps;
  projects: SidebarItemsProps;
}

interface SidebarProps {
  isSidebarVisible: boolean
}

export type {
  SidebarTitleContainerProps,
  SidebarItemsProps,
  SidebarItemProps,
  SidebarContent,
  SidebarProps
}