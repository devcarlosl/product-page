import { Entities, FieldProductDetailsByColor } from "@/types/query";

export interface InfoBannerProps {
  title: Entities["title"];
  subTitle: Entities["fieldProductSubtitle"];
  summary: Entities["fieldProductSummary"]["value"];
  colors: FieldProductDetailsByColor[];
}
