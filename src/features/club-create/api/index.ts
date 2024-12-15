import apiClient from '@/lib/utils/apiClient';
import { BookClubForm } from '../types';
import { toKoreanTime } from '@/lib/utils/dateUtils';

export const createBookClub = async (data: BookClubForm) => {
  const formData = new FormData();

  const imageFile = data.image instanceof File ? data.image : null;
  if (imageFile) {
    formData.append('image', imageFile);
  }

  const bookClubData = {
    title: data.title,
    description: data.description,
    bookClubType: data.bookClubType,
    meetingType: data.meetingType,
    targetDate: toKoreanTime(data.targetDate),
    endDate: toKoreanTime(data.endDate),
    memberLimit: data.memberLimit,
    city: data.city,
    town: data.town,
  };

  formData.append(
    'bookClub',
    new Blob([JSON.stringify(bookClubData)], {
      type: 'application/json',
    }),
  );

  const response = await apiClient.post('/book-clubs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
