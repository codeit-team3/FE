import { toKoreanTime } from '@/lib/utils/dateUtils';
import { BookClubForm } from '../types';
import apiClient from '@/lib/utils/apiClient';

export const useCreateBookClub = () => {
  const createBookClub = async (data: BookClubForm) => {
    try {
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
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIiwic3ViIjoiY2xvdWQwNDA2QG5hdmVyLmNvbSIsImlhdCI6MTczNDI0MzUyMywiZXhwIjoxNzM0MjQ0NDIzfQ.6eKKfHJfAa-kqezFY7vy1wwKIeJdABJ_XllqnGZQ2jI',
        },
      });

      return response.data;
    } catch (error) {
      console.error('북클럽 생성 중 오류 발생:', error);
      throw error;
    }
  };

  return { createBookClub };
};
