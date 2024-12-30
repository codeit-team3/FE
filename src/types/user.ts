export interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  description?: string | null;
  image?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}
