import Image from "next/image";

import TagGallery from "../TagGallery";
import ShowGalleryButton from "../ShowGalleryButton";

import { ImageBannerProps } from "./types";

import styles from "./image-banner.module.css";

function ImageBanner({
  imageUrl,
  imageAlt,
  showCarousel,
  showGalleryButton,
  handleToggleShowCarousel,
  handleToggleGalleryButton,
}: ImageBannerProps) {
  return (
    <div
      className={styles.imageContainer}
      onMouseEnter={handleToggleGalleryButton}
      onMouseLeave={handleToggleGalleryButton}
    >
      <Image src={imageUrl} alt={imageAlt} fill />
      <TagGallery
        showCarousel={showCarousel}
        showGalleryButton={showGalleryButton}
      />
      <ShowGalleryButton
        onClick={handleToggleShowCarousel}
        showGalleryButton={showGalleryButton}
      />
    </div>
  );
}

export default ImageBanner;
