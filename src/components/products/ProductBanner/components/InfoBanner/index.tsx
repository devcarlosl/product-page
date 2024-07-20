import Button from "@/components/commons/Button";

import { sanitizeHTML } from "@/utils/sanitizeHTLM";

import { InfoBannerProps } from "./types";

import styles from "./info-banner.module.css";

function InfoBanner({ title, subTitle, summary, colors }: InfoBannerProps) {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.infoTitle}>{title}</h1>
      <h2 className={styles.infoSubTitle}>{subTitle}</h2>
      <p
        className={styles.infoSummary}
        dangerouslySetInnerHTML={{
          __html: sanitizeHTML(summary),
        }}
      />
      <div className={styles.infoColors}>
        <span className={styles.infoColorText}>Cores</span>
        {colors.map((color) => (
          <button
            key={color.entity.entityId}
            className={styles.infoColorButton}
            style={{
              backgroundColor:
                color.entity.fieldProdDetailsBcolorColor.entity.fieldColorRgb,
            }}
          />
        ))}
      </div>
      <Button text="Onde comprar" />
    </div>
  );
}

export default InfoBanner;
