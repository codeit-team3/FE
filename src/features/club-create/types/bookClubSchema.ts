import { z } from 'zod';

export const bookClubSchema = z.object({
  title: z
    .string()
    .min(1, '모임 이름을 입력해주세요')
    .max(30, '모임 이름은 최대 30자까지 가능합니다'),
  description: z
    .string()
    .min(1, '상세 설명을 입력해주세요')
    .max(30, '상세 설명은 최대 30자까지 가능합니다'),
  image: z.any().optional(),
  bookClubType: z.enum(['FREE', 'FIXED']),
  meetingType: z.enum(['ONLINE', 'OFFLINE']),
  town: z.string().optional(),
  targetDate: z.date().refine((date) => !isNaN(date.getTime()), {
    message: '유효한 날짜를 선택해주세요',
  }),
  endDate: z.date().refine((date) => !isNaN(date.getTime()), {
    message: '유효한 날짜를 선택해주세요',
  }),
  memberLimit: z
    .number()
    .min(3, '최소 3명 이상 입력해주세요')
    .max(20, '최대 20명까지 가능합니다'),
});

export type BookClubForm = z.infer<typeof bookClubSchema>;
