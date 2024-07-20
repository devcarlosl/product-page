import Image from "next/image";

import ZoomButton from "../ZoomButton";

import { ImageDisplayProps } from "./types";

import styles from "./image-display.module.css";

function ImageDisplay({
  imageUrl,
  imageAlt,
  onClickZoom,
  children,
}: ImageDisplayProps) {
  return (
    <div className={styles.imageDisplayContainer}>
      <div style={{ position: "relative" }}>
        <Image src={imageUrl} alt={imageAlt} width={400} height={400} />
        <ZoomButton onClick={onClickZoom} />
      </div>
      {children}
    </div>
  );
}

export default ImageDisplay;
