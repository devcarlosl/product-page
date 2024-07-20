import { Entities } from "@/types/query";

interface InfoBannerProps {
  title: Entities["title"];
  subTitle: Entities["fieldProductSubtitle"];
  summary: Entities["fieldProductSummary"]["value"];
  colors: {
    entity: {
      entityId: string;
      fieldProdDetailsBcolorColor: {
        entity: {
          fieldColorRgb: string;
        };
      };
    };
  }[];
}
