import { useState } from "react";

import { FieldProductDetailsByColor } from "@/types/query";

export const useCarouselHandlers = (
  images: FieldProductDetailsByColor["entity"]["fieldProdDetailsBcolGallery"]
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return {
    nextItem,
    prevItem,
    currentIndex,
    setCurrentIndex,
    zoomedImage,
    openZoomedImage,
    closeZoomedImage,
  };
};
