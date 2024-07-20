import { FieldProductDetailsByColor } from "@/types/query";

interface CarrosselProps {
  images: FieldProductDetailsByColor["entity"]["fieldProdDetailsBcolGallery"];
  closeCarousel: () => void;
}
