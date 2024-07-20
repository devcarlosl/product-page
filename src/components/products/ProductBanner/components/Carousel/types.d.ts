import { FieldProductDetailsByColor } from "@/types/query";

export interface CarrosselProps {
  images: FieldProductDetailsByColor["entity"]["fieldProdDetailsBcolGallery"];
  closeCarousel: () => void;
}
