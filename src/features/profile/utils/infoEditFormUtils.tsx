import { EditInfoParams } from '../types';

export const toFormData = (data: EditInfoParams) => {
  const formData = new FormData();

  const imageFile = data.image instanceof File ? data.image : null;

  if (imageFile) {
    formData.append('image', imageFile);
  }
  const userData = {
    nickname: data?.user?.nickname,
    description: data?.user?.description,
  };
  formData.append(
    'user',
    new Blob([JSON.stringify(userData)], {
      type: 'application/json',
    }),
  );

  return formData;
};
