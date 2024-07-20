import TagGalleryIcon from "@/icons/desktop/tag_gallery.svg";

import styles from "./tag-gallery.module.css";

function TagGallery({ showCarousel, showGalleryButton }: TagGalleryProps) {
  return (
    <>
      {!showCarousel && !showGalleryButton ? (
        <i className={styles.tagGallery}>
          <TagGalleryIcon />
        </i>
      ) : null}
    </>
  );
}

export default TagGallery;
