interface ImageProps {
  entity: {
    fieldMediaImage: {
      alt: string;
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
}

interface NavigationThumbnailListProps {
  images: FieldProductDetailsByColor["entity"]["fieldProdDetailsBcolGallery"];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
