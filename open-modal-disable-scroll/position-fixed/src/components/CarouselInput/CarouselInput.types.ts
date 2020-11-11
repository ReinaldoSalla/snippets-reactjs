interface CarouselInputProps {
  index: number;
  isSidebarVisible: boolean;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

interface CarouselInputWrapperProps {
  $isSidebarVisible: boolean;
}

export type {CarouselInputProps, CarouselInputWrapperProps};