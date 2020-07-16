interface SidebarItemsProps {
  title: string;
  items: Array<string>;
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
  projects: SidebarItemsProps;
}

interface SidebarProps {
  isSidebarVisible: boolean
}

export type {
  SidebarItemsProps,
  SidebarItemProps,
  SidebarContent,
  SidebarProps
}