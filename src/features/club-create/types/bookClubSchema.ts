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
  image: z.string().optional(),
  bookType: z.enum(['자유책', '지정책']),
  location: z.enum(['온라인', '오프라인']),
  place: z.string().optional(),
  startDate: z.string().min(1, '시작 날짜를 선택해주세요'),
  endDate: z.string().min(1, '종료 날짜를 선택해주세요'),
  maxParticipants: z
    .number()
    .min(3, '최소 3명 이상 입력해주세요')
    .max(20, '최대 20명까지 가능합니다'),
});

export type BookClubForm = z.infer<typeof bookClubSchema>;
