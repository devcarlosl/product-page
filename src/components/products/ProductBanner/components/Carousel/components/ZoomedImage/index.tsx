import Image from "next/image";

import ZoomedNavButton from "../ZoomedNavButton";

import { ZoomedImageProps } from "./types";

import styles from "./zoomed-image.module.css";

function ZoomedImage({
  nextItem,
  prevItem,
  zoomedImage,
  closeZoomedImage,
  imageUrl,
}: ZoomedImageProps) {
  return (
    <>
      {zoomedImage ? (
        <div className={styles.zoomedImageContainer} onClick={closeZoomedImage}>
          <ZoomedNavButton onClick={prevItem} direction="prev" />
          <Image
            src={imageUrl}
            alt="Imagem ampliada"
            fill
            className={styles.zoomedImage}
          />
          <ZoomedNavButton onClick={nextItem} direction="next" />
        </div>
      ) : null}
    </>
  );
}

export default ZoomedImage;
