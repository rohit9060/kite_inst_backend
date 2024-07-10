import { IBlog, IBlogRepositories, ICreateBlog, IUpdateBlog } from '@/types/repositories';

class BlogRepositories implements IBlogRepositories {
  // create blog
  public async createBlog(data: ICreateBlog) {}

  // update blog by id
  public async updateBlogById(id: string, data: IUpdateBlog) {}

  // update blog by email
  public async updateBlogEmail(email: string, data: IUpdateBlog) {}

  // delete blog by id
  deleteBlogById(id: string, data: IUpdateBlog): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }

  // delete blog by email
  deleteBlogEmail(email: string, data: IUpdateBlog): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }

  // get blog by id
  getBlogById(id: string, data: IUpdateBlog): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }

  // get blog by email
  getBlogEmail(email: string, data: IUpdateBlog): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }

  // get unfiltered  blogs
  getUnfilteredBlogs(id: string): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }

  // get filtered blogs
  getFilteredBlogs(
    page: number,
    limit: number,
    search: string,
    order: { name?: string; order?: string }
  ): Promise<unknown | IBlog> {
    throw new Error('Method not implemented.');
  }
}

export const blogRepositories = new BlogRepositories();
