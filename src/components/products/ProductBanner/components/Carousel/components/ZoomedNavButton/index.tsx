import Image from "next/image";

import chevronLeft from "@/icons/desktop/chevron-left.svg?url";
import chevronRight from "@/icons/desktop/chevron-right.svg?url";

import styles from "./zoomed-nav-button.module.css";

function ZoomedNavButton({ onClick, direction }: ZoomedNavigationButtonProps) {
  return (
    <button
      className={`${styles.zoomedNavigationButton} ${styles[direction]}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <Image
        src={direction === "prev" ? chevronLeft : chevronRight}
        alt={`Navegar para ${direction}`}
        width={36}
        height={36}
      />
    </button>
  );
}

export default ZoomedNavButton;
