import { PortableTextBlock } from "sanity";

export type Author = {
  name: string;
  image: string;
  slug: any;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category?: string;
  metadata: string;
  body?: PortableTextBlock[];
  mainImage: string;
  author: {
    name: string;
    image: string;
    slug: {
      current: string;
    };
    bio: string;
  };
  tags: string[];
  publishedAt: string;
  tipo?: string;
};

// export type BlogTwo = {
//   id: number;
//   title: string;
//   paragraph: string;
//   image: string;
//   tags: string[];
//   publishDate: string;
// };
