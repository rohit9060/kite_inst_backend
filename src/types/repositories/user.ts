export interface IUser {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;

  avatar?: string;
  roles?: Array<string>;

  isVerified?: Boolean;
  isApproved?: Boolean;

  createdCourses?: Array<any>;
  createdBlogs?: Array<any>;

  favoritedBlogs?: Array<any>;
  favoritedCourses?: Array<any>;

  BlogComment?: Array<any>;

  likedBlogs?: Array<any>;
  likedCourses?: Array<any>;

  token?: string | null;
  otp?: string | null;

  createdAt?: Date;
  updateAt?: Date;
}

export interface ICreateUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  roles: Array<string>;
  avatar?: string;
  token: string;
  otp: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  roles?: Array<string>;
  avatar?: string;
  token?: string | null;
  otp?: string | null;
}

export interface IUserResponse {
  user: IUser | null;
}

export interface IUsersResponse {
  users: Array<IUser> | [];
  usersCount: number;
}

export interface IUserRepositories {
  createUser(data: ICreateUser): Promise<unknown | IUserResponse>;
  updateUserById(id: string, data: IUpdateUser): Promise<unknown | IUserResponse>;
  updateUserByEmail(email: string, data: IUpdateUser): Promise<unknown | IUserResponse>;
  deleteUserById(id: string, data: IUpdateUser): Promise<unknown | IUserResponse>;
  deleteUserByEmail(email: string, data: IUpdateUser): Promise<unknown | IUserResponse>;
  getUserById(id: string): Promise<unknown | IUserResponse>;
  getUserByEmail(email: string): Promise<unknown | IUserResponse>;
  getUnfilteredUsers(id: string): Promise<unknown | IUsersResponse>;
  getFilteredUsers(
    page: number,
    limit: number,
    search: string,
    order: {
      name?: string;
      order?: string;
    }
  ): Promise<unknown | IUsersResponse>;
}
