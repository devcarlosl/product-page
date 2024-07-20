import ImgGalleryIcon from "@/icons/desktop/icon_img_gallery_green.svg";

import { ShowGalleryButtonProps } from "./types";

import styles from "./show-gallery-button.module.css";

function ShowGalleryButton({
  showGalleryButton,
  onClick,
}: ShowGalleryButtonProps) {
  return (
    <>
      {showGalleryButton ? (
        <div className={styles.showGallery}>
          <button className={styles.showGalleryButton} onClick={onClick}>
            Ver galeria
            <ImgGalleryIcon />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ShowGalleryButton;
