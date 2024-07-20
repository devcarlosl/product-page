interface ImageBannerProps {
  imageUrl: string;
  imageAlt: string;
  showCarousel: boolean;
  showGalleryButton: boolean;
  handleToggleShowCarousel: () => void;
  handleToggleGalleryButton: () => void;
}
