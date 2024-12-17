import User from './user';

export interface ProfilePageProps {
  user: User | null;
}

export interface ProfileEditData {
  name: string;
  companyName?: string;
  image?: string | null;
}
