import { toKoreanTime } from '@/lib/utils/dateUtils';
import { BookClubForm } from '../types';

export const useCreateBookClub = () => {
  const createBookClub = (data: BookClubForm) => {
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

    // TODO: API 호출 로직 추가
    console.log('전송될 데이터:', {
      이미지: imageFile
        ? {
            이름: imageFile.name,
            타입: imageFile.type,
            크기: `${(imageFile.size / 1024).toFixed(2)}KB`,
          }
        : null,
      북클럽_데이터: bookClubData,
    });

    return formData;
  };

  return { createBookClub };
};
