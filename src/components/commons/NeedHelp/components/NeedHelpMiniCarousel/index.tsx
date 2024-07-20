import { useNeedHelpHandlers } from "@/hooks/useNeedHelpHandlers";

import CircleNavGrayIcon from "@/icons/mobile/circle_nav_gray.svg";
import CircleNavGreenIcon from "@/icons/mobile/circle_nav_green.svg";
import ChevronRightIcon from "@/icons/desktop/icon_angle_right_white.svg";

import { needHelpOptions } from "../../utils";

import styles from "../../need-help.module.css";

function NeedHelpMiniCarousel() {
  const {
    currentOptionIndex,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useNeedHelpHandlers(needHelpOptions);

  return (
    <div
      className={styles.needHelpOptionsContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.needHelpOption}>
        <i>{needHelpOptions[currentOptionIndex].icon}</i>
        <span className={styles.needHelpOptionText}>
          {needHelpOptions[currentOptionIndex].text}
        </span>
        <i>
          <ChevronRightIcon />
        </i>
      </div>
      <div className={styles.needHelpNav}>
        {needHelpOptions.map((_, index) => (
          <i
            key={index}
            className={
              index === currentOptionIndex
                ? styles.needHelpNavActive
                : styles.needHelpNavInactive
            }
          >
            {index === currentOptionIndex ? (
              <CircleNavGreenIcon />
            ) : (
              <CircleNavGrayIcon />
            )}
          </i>
        ))}
      </div>
    </div>
  );
}

export default NeedHelpMiniCarousel;
