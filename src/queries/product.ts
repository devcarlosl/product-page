export const PRODUCT_QUERY = `
  {
    nodeQuery(
      limit: 200
      filter: {
        conjunction: AND
        groups: [
          {
            conditions: [
              {
                operator: EQUAL
                field: "type"
                value: ["product"]  
                language: PT_BR
              }
              {
                operator: EQUAL
                field: "field_product_discontinued"
                value: "0"
                language: PT_BR
              }
              { operator: EQUAL, field: "status", value: "1", language: PT_BR }
              {
                operator: IN
                field: "field_product_crm_id"
                value: ["4630400"]
                language: PT_BR
              }
            ]
          }
        ]
      }
      sort: [
        { field: "field_product_is_launchphase", direction: DESC }
        { field: "created", direction: DESC }
        { field: "title", direction: ASC }
      ]
    ) {
      entities {
        entityType
        entityLabel
        entityId
        entityUrl {
          path
          routed
        }
        entityLanguage {
          argument
        }
        ... on NodeProduct {
          type {
            targetId
          }

          title
          fieldProductSubtitle
          fieldProductCrmId
          fieldProductSummary {
            value
          }
          fieldProductDetailsByColor {
            entity {
              ...ProductDetailsByColor
            }
          }

          fieldProductDescription {
            entity {
              ... on ParagraphCardMinibanner {
                ...ParagraphCardMinibanner
              }
              ... on ParagraphMedia {
                fieldMediaMedia {
                  entity {
                    ...Media
                  }
                }
              }
            }
          }

          entityLabel
          entityChanged
          entityLanguage {
            argument
          }
          fieldProductDiscontinued
          fieldProductIsPlugandplay
          fieldProductIsLaunchphase
          fieldProductTaxonomy {
            entity {
              entityId
              entityLabel
              entityUrl {
                path
              }
              ... on TaxonomyTermProductTaxonomy {
                fieldProductTaxonomyType
              }
            }
          }
        }
      }
    }
  }

  fragment Media on Media {
    entityLabel
    entityBundle
    thumbnail {
      url
    }

    ... on MediaVideo {
      fieldMediaVideoFile {
        entity {
          entityId
        }
        ... on FieldMediaFieldMediaVideoFile {
          entity {
            ... on File {
              url
            }
          }
        }
      }

      fieldMediaVideoThumbnail {
        entity {
          entityId
        }
        ... on FieldMediaFieldMediaVideoThumbnail {
          entity {
            ... on MediaImage {
              fieldMediaImage {
                alt
                url
              }
            }
          }
        }
      }
    }
    ... on MediaImage {
      fieldMediaImage {
        alt
        url

        image_style_optim: derivative(style: IMAGE_OPTIM) {
          url
        }
      }
    }
    ... on MediaRemoteVideo {
      fieldMediaOembedVideo
    }
    ... on MediaDocument {
      fieldMediaFile {
        entity {
          filename
          url
        }
      }
    }
    ... on MediaSvg {
      fieldMediaFile1 {
        entity {
          ... on File {
            url
          }
        }
      }
    }
  }

  fragment ProductDetailsByColor on ProductDetailsByColorProductDetailsByColorBundle {
    entityId
    fieldProdDetailsBcolorColor {
      entity {
        ... on TaxonomyTermColor {
          name
          fieldColorRgb
        }
      }
    }
    fieldProdDetailsBcolorImage {
      entity {
        ...Media
      }
    }
    fieldProdDetailsBcolorCover {
      entity {
        ...Media
      }
    }
    fieldProdDetailsBcolGallery {
      entity {
        ...Media
      }
    }
  }

  fragment ParagraphCardMinibanner on ParagraphCardMinibanner {
    fieldCardMinibannerTitle
    fieldCardMinibannerIsButton
    fieldCardMinibannerDesc {
      processed
      value
    }
    fieldCardMinibannerMedia {
      entity {
        ...Media
      }
    }
    fieldCardMinibannerMediaPos
    fieldCardMinibannerCtaText
    fieldCardMinibannerCtaLink {
      url {
        path
      }
      attribute(key: "target")
    }
    published: status
  }
`;
