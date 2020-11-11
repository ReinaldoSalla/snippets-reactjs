interface CarouselItemProps {
  style: any;
  name: string;
  title: string;
  description: string;
  check: string;
  scrollToJavascript: () => void;
  scrollToReact: () => void;
  scrollToNode: () => void;
  isSidebarVisible: boolean;
}

interface TextProps {
  $isSidebarVisible: boolean;
}

export type { CarouselItemProps, TextProps };