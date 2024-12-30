export interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  description?: string;
  image?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
