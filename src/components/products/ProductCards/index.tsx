import React from "react";

import Card from "@/commons/Card";

import { ProductCardsProps } from "./types";

import styles from "./product-cards.module.css";

function ProductCards({ descriptions }: ProductCardsProps) {
  return (
    <ul className={styles.cardListContainer}>
      {descriptions.map((description, index) => (
        <Card
          key={index}
          title={description.entity.fieldCardMinibannerTitle}
          description={description.entity.fieldCardMinibannerDesc.value}
          imageUrl={
            description.entity.fieldCardMinibannerMedia.entity.fieldMediaImage
              ?.url ?? ""
          }
          imageAlt={
            description.entity.fieldCardMinibannerMedia.entity.fieldMediaImage
              ?.alt ?? ""
          }
          bannerPosition={description.entity.fieldCardMinibannerMediaPos}
        />
      ))}
    </ul>
  );
}

export default ProductCards;
