export interface Asset {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    locale: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

interface ContentfulEntry {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
    category: string;
    thumbnail: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    author: string;
    createdAt: string;
    content: {
      nodeType: string;
      data: Record<string, unknown>;
      content: {
        nodeType: string;
        value: string;
        marks: Record<string, unknown>[];
        data: Record<string, unknown>;
      }[];
    };
  };
}

export interface ContentfulResponse {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: ContentfulEntry[];
  includes: {
    map(arg0: (asset: any) => import("react").JSX.Element): import("react").ReactNode;
    Asset: Asset[];
  };
}

// const createdAtString: string | undefined = items.fields.createdAt;
// const createdAtDate: Date | undefined = createdAtString ? new Date(createdAtString) : undefined;