import Thumbnail from "./components/Thumbnail";

import { ImageProps, NavigationThumbnailListProps } from "./types";

import styles from "./thumbnail-list.module.css";

function NavigationThumbnailList({
  images,
  currentIndex,
  setCurrentIndex,
}: NavigationThumbnailListProps) {
  return (
    <div className={styles.thumbnailList}>
      {images.map((image: ImageProps, index: number) => (
        <Thumbnail
          key={image.entity.fieldMediaImage?.url}
          imageUrl={image.entity.thumbnail?.url ?? ""}
          imageAlt={image.entity.fieldMediaImage?.alt ?? ""}
          onClick={() => setCurrentIndex(index)}
          isActive={index === currentIndex}
        />
      ))}
    </div>
  );
}

export default NavigationThumbnailList;
