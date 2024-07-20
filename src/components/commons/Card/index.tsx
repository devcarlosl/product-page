import { checkDirectionImageClass } from "@/utils/checkDirectionImageClass";

import CardInfo from "./components/CardInfo";
import CardImage from "./components/CardImage";

import { CardProps } from "./types";

import styles from "./card.module.css";

function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  bannerPosition,
}: CardProps) {
  return (
    <li
      className={`${styles.cardContainer} ${checkDirectionImageClass(
        bannerPosition,
        styles
      )}`}
    >
      <CardInfo title={title} description={description} />
      <CardImage imageUrl={imageUrl} imageAlt={imageAlt} />
    </li>
  );
}

export default Card;
