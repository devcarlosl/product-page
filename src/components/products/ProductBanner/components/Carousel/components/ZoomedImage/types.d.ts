export interface ZoomedImageProps {
  zoomedImage: string | null;
  closeZoomedImage: () => void;
  imageUrl: string;
  nextItem: () => void;
  prevItem: () => void;
}
