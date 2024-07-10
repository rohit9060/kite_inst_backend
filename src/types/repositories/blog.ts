export interface IBlog {
  id: string;

  title?: string;
  slug?: string;
  description?: string;

  tags?: Array<any>;
  categories?: Array<any>;

  isPublic?: Boolean;

  authorId?: string;

  author?: Array<any>;

  favoritedUsers?: Array<any>;

  likedUsers?: Array<any>;

  comments?: Array<any>;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateBlog {
  title: string;
  slug: string;
  description: string;
  tags: Array<string>;
  categories: Array<string>;
  authorId: string;
}

export interface IUpdateBlog {
  title?: string;
  slug?: string;
  description?: string;

  tags?: Array<string>;
  categories?: Array<string>;

  isPublic?: Boolean;

  favoritedUsers?: Array<any>;

  likedUsers?: Array<any>;

  comments?: Array<any>;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBlogResponse {
  user: IBlog | null;
}

export interface IBlogsResponse {
  users: Array<IBlog> | [];
  blogsCount: number;
}

export interface IBlogRepositories {
  createBlog(data: ICreateBlog): Promise<unknown | IBlog>;
  updateBlogById(id: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  updateBlogEmail(email: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  deleteBlogById(id: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  deleteBlogEmail(email: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  getBlogById(id: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  getBlogEmail(email: string, data: IUpdateBlog): Promise<unknown | IBlog>;
  getUnfilteredBlogs(id: string): Promise<unknown | IBlog>;
  getFilteredBlogs(
    page: number,
    limit: number,
    search: string,
    order: {
      name?: string;
      order?: string;
    }
  ): Promise<unknown | IBlog>;
}
