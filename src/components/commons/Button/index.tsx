import ChevronRightIcon from "@/icons/desktop/icon_angle_right_white.svg";

import styles from "./button.module.css";

function Button({ text }: { text: string }) {
  return (
    <button className={styles.button}>
      {text}
      <ChevronRightIcon className={styles.icon} />
    </button>
  );
}

export default Button;
