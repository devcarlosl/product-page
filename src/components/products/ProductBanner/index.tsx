"use client";

import { useProductBannerHandlers } from "@/hooks/useProductBannerHandlers";

import Carousel from "./components/Carousel";
import InfoBanner from "./components/InfoBanner";
import ImageBanner from "./components/ImageBanner";

import { ProductBannerProps } from "./types";

import styles from "./product-banner.module.css";

function ProductBanner({ productInfo }: ProductBannerProps) {
  const {
    showCarousel,
    showGalleryButton,
    handleToggleShowCarousel,
    handleToggleGalleryButton,
  } = useProductBannerHandlers();

  return (
    <>
      {!showCarousel ? (
        <div className={styles.bannerContainer}>
          <InfoBanner
            title={productInfo.title}
            subTitle={productInfo.fieldProductSubtitle}
            summary={productInfo.fieldProductSubtitle}
            colors={productInfo.fieldProductDetailsByColor}
          />
          <ImageBanner
            imageUrl={
              productInfo.fieldProductDetailsByColor[0].entity
                .fieldProdDetailsBcolorCover.entity.fieldMediaImage?.url ?? ""
            }
            imageAlt={productInfo.title}
            showCarousel={showCarousel}
            showGalleryButton={showGalleryButton}
            handleToggleShowCarousel={handleToggleShowCarousel}
            handleToggleGalleryButton={handleToggleGalleryButton}
          />
        </div>
      ) : (
        <Carousel
          images={
            productInfo.fieldProductDetailsByColor[0].entity
              .fieldProdDetailsBcolGallery
          }
          closeCarousel={handleToggleShowCarousel}
        />
      )}
    </>
  );
}

export default ProductBanner;
