import apiClient from '@/lib/utils/apiClient';

interface editProfileParams {
  nickname?: string;
  image?: string;
  description?: string;
}

export const editProfile = async ({
  nickname,
  image,
  description,
}: editProfileParams) => {
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
