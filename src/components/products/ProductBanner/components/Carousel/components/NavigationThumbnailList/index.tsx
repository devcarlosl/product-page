import Thumbnail from "./components/Thumbnail";

import styles from "./thumbnail-list.module.css";

function NavigationThumbnailList({
  images,
  currentIndex,
  setCurrentIndex,
}: NavigationThumbnailListProps) {
  return (
    <div className={styles.thumbnailList}>
      {images.map((image, index: number) => (
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
