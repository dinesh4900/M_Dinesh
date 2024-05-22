export interface IPostsResult {
  found: number;
  posts: IPost[];
}

export interface IAuthor {
  ID: number;
  login: string;
  email: boolean;
  name?: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL?: string;
  profile_URL: string;
}

export interface IPost {
  date: string;
  title: string;
  slug: string;
  post_thumbnail: IPostthumbnail;
  categories: ICategories;
  featured_image: string;
  content: string;
  author: IAuthor;
}

export interface IPostthumbnail {
  ID: number;
  URL: string;
  guid: string;
  mime_type: string;
  width: number;
  height: number;
}

export interface ICategoryResults {
  found: number;
  categories: ICategory[];
}

export interface ICategories {
  [x: string]: ICategory;
}

export interface ICategory {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
}
