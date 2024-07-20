export interface ProductCardsProps {
  descriptions: {
    entity: {
      fieldCardMinibannerTitle: string;
      fieldCardMinibannerDesc: {
        value: string;
      };
      fieldCardMinibannerMedia: {
        entity: {
          fieldMediaImage: {
            url: string;
            alt: string;
          };
        };
      };
      fieldCardMinibannerMediaPos: string;
    };
  }[];
}
