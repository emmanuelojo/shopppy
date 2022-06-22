export interface Customer {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  accessToken?: string;
  password?: string;
}
