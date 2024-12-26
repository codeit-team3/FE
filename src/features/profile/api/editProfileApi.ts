import apiClient from '@/lib/utils/apiClient';
import { ProfileEditData } from '../types';

export const editProfile = async ({
  nickname,
  image,
  description,
}: ProfileEditData) => {
  try {
    await apiClient.post('auths/user', {
      nickname,
      image,
      description,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
