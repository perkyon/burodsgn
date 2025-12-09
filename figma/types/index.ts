// Общие типы для проекта

export interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

export interface ProjectPreview {
  id: number;
  img: string;
  title: string;
}

export interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface SectionPosition {
  left?: string;
  top?: string;
  width?: string;
}
