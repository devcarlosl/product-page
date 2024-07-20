import Image from "next/image";

import styles from "./card-image.module.css";

function CardImage({ imageUrl, imageAlt }: CardImageProps) {
  return (
    <div className={styles.cardImageContainer}>
      <Image src={imageUrl} alt={imageAlt} fill />
    </div>
  );
}

export default CardImage;
