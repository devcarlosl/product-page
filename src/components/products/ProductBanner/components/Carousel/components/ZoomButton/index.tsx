import Image from "next/image";

import iconZoom from "@/icons/desktop/icon_searchplus.svg?url";

import styles from "./zoom-button.module.css";

function ZoomButton({ onClick }: ZoomButtonProps) {
  return (
    <button className={styles.zoomButton} onClick={onClick}>
      <Image src={iconZoom} alt="Botão de zoom" width={24} height={24} />
    </button>
  );
}

export default ZoomButton;
