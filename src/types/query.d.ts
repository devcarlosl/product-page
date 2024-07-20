interface EntityUrl {
  path: string;
  routed: boolean;
}

interface EntityLanguage {
  argument: string;
}

interface Type {
  targetId: string;
}

interface FieldMediaImage {
  alt: string;
  url: string;
  image_style_optim: {
    url: string;
  };
}

interface Thumbnail {
  url: string;
}

interface Entity {
  entityId: string;
  entityLabel?: string;
  entityBundle?: string;
  name?: string;
  fieldColorRgb?: string;
  thumbnail?: Thumbnail;
  fieldMediaImage?: FieldMediaImage;
}

export interface FieldProductDetailsByColor {
  entity: {
    entityId: string;
    fieldProdDetailsBcolorColor: {
      entity: Entity;
    };
    fieldProdDetailsBcolorImage: {
      entity: Entity;
    };
    fieldProdDetailsBcolorCover: {
      entity: Entity;
    };
    fieldProdDetailsBcolGallery: Array<{
      entity: Entity;
    }>;
  };
}

interface FieldProductDescription {
  entity: {
    fieldCardMinibannerTitle: string;
    fieldCardMinibannerIsButton: boolean;
    fieldCardMinibannerDesc: {
      processed: string;
      value: string;
    };
    fieldCardMinibannerMedia: {
      entity: Entity;
    };
    fieldCardMinibannerMediaPos: string;
    fieldCardMinibannerCtaText: null | string;
    fieldCardMinibannerCtaLink: null | string;
    published: boolean;
  };
}

interface FieldProductTaxonomy {
  entity: {
    entityId: string;
    entityLabel: string;
    entityUrl: EntityUrl;
    fieldProductTaxonomyType: string;
  };
}

interface Entities {
  entityType: string;
  entityLabel: string;
  entityId: string;
  entityUrl: EntityUrl;
  entityLanguage: EntityLanguage;
  type: Type;
  title: string;
  fieldProductSubtitle: string;
  fieldProductCrmId: string;
  fieldProductSummary: {
    value: string;
  };
  fieldProductDetailsByColor: FieldProductDetailsByColor[];
  fieldProductDescription: FieldProductDescription[];
  entityChanged: string;
  fieldProductDiscontinued: boolean;
  fieldProductIsPlugandplay: boolean;
  fieldProductIsLaunchphase: boolean;
  fieldProductTaxonomy: FieldProductTaxonomy[];
}

interface NodeQuery {
  entities: Entities[];
}

interface DataStructure {
  nodeQuery: NodeQuery;
}
