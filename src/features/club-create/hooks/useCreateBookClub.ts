'use client';

import { useState } from 'react';
import { toKoreanTime } from '@/lib/utils/dateUtils';
import { BookClubForm } from '../types';
import apiClient from '@/lib/utils/apiClient';

export const useCreateBookClub = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: BookClubForm) => {
    setIsLoading(true);
    setError(null);

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
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIiwic3ViIjoiY2xvdWQwNDA2QG5hdmVyLmNvbSIsImlhdCI6MTczNDI0NzY3OSwiZXhwIjoxNzM0MzM0MDc5fQ.LPfdAD6zrsU3tOKys-WSCt6fi1QhtpVJd2VTXKYrNQc',
        },
      });

      // TODO:: 성공 시 처리
      return response.data;
    } catch (error) {
      setError('북클럽 생성에 실패했습니다.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading, error };
};
