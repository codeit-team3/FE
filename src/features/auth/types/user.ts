export interface User {
  teamId: string;
  id: number;
  email: string;
  name: string;
  companyName: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}
