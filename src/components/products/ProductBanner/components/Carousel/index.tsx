import { useCarouselHandlers } from "@/hooks/useCarouselHandlers";

import ZoomedImage from "./components/ZoomedImage";
import ImageDisplay from "./components/ImageDisplay";
import NavigationButtons from "./components/NavigationButtons";
import NavigationThumbnailList from "./components/NavigationThumbnailList";

import CloseIcon from "@/icons/desktop/icon_close.svg";

import { CarrosselProps } from "./types";

import styles from "./carousel.module.css";

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.closeButton} onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

function Carrossel({ images, closeCarousel }: CarrosselProps) {
  const {
    nextItem,
    prevItem,
    currentIndex,
    setCurrentIndex,
    zoomedImage,
    openZoomedImage,
    closeZoomedImage,
  } = useCarouselHandlers(images);

  const imageUrl = images[currentIndex].entity.fieldMediaImage?.url ?? "";
  const imageAlt = images[currentIndex].entity.fieldMediaImage?.alt ?? "";

  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <NavigationButtons onPrev={prevItem} />
        <ImageDisplay
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          onClickZoom={() => openZoomedImage(imageUrl)}
        >
          <CloseButton onClick={closeCarousel} />
        </ImageDisplay>

        <NavigationButtons onNext={nextItem} />
      </div>
      <ZoomedImage
        prevItem={prevItem}
        nextItem={nextItem}
        zoomedImage={zoomedImage}
        closeZoomedImage={closeZoomedImage}
        imageUrl={imageUrl}
      />
      <NavigationThumbnailList
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default Carrossel;
