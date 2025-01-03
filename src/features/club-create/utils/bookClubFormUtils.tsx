import { BookClubForm } from '../types';
import { toKoreanTime } from '@/lib/utils/dateUtils';

export const toFormData = (data: BookClubForm) => {
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
    address: data.address,
    detailAddress: data.detailAddress,
  };

  formData.append(
    'bookClub',
    new Blob([JSON.stringify(bookClubData)], {
      type: 'application/json',
    }),
  );

  return formData;
};
