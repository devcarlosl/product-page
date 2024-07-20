import Image from "next/image";

import iconNavAngleLeft from "@/icons/desktop/icon_nav_angle_left.svg?url";
import iconNavAngleRight from "@/icons/desktop/icon_nav_angle_right.svg?url";

import styles from "./navigation-buttons.module.css";

function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <div className={styles.navigationButtons}>
      {onPrev && (
        <button onClick={onPrev}>
          <Image src={iconNavAngleLeft} alt="Navegar para esquerda" />
        </button>
      )}
      {onNext && (
        <button onClick={onNext}>
          <Image src={iconNavAngleRight} alt="Navegar para direita" />
        </button>
      )}
    </div>
  );
}

export default NavigationButtons;
