import { useState } from "react";

export const useProductBannerHandlers = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showGalleryButton, setHasGalleryButton] = useState(false);

  const handleToggleShowCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  const handleToggleGalleryButton = () => {
    setHasGalleryButton(!showGalleryButton);
  };

  return {
    showCarousel,
    showGalleryButton,
    handleToggleShowCarousel,
    handleToggleGalleryButton,
  };
};
