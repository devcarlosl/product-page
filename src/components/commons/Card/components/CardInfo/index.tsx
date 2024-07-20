import { sanitizeHTML } from "@/utils/sanitizeHTLM";

import { CardInfoProps } from "./types";

import styles from "./card-info.module.css";

function CardInfo({ title, description }: CardInfoProps) {
  return (
    <div className="flex-center">
      <div className={styles.cardInfoWrapper}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html: sanitizeHTML(description),
          }}
        />
      </div>
    </div>
  );
}

export default CardInfo;
