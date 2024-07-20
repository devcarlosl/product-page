export interface ImageDisplayProps {
  imageUrl: string;
  imageAlt: string;
  onClickZoom: () => void;
  children?: React.ReactNode;
}
