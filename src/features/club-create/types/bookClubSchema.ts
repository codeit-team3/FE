import { z } from 'zod';

export const bookClubSchema = z
  .object({
    image: z
      .custom<File | undefined>((file) => {
        if (!file || !(file instanceof File)) return true;

        const isValidType = ['image/jpg', 'image/jpeg'].includes(file.type);
        const isValidSize = file.size <= 10 * 1024 * 1024;

        return isValidType && isValidSize;
      }, '파일은 JPG/JPEG 형식이며 10MB 이하이어야 합니다')
      .optional(),
    title: z
      .string()
      .min(1, '모임 이름을 입력해주세요')
      .max(30, '모임 이름은 최대 30자까지 가능합니다'),
    description: z
      .string()
      .min(1, '상세 설명을 입력해주세요')
      .max(30, '상세 설명은 최대 30자까지 가능합니다'),
    bookClubType: z.enum(['FREE', 'FIXED'], {
      required_error: '모임 유형을 선택해주세요',
      invalid_type_error: '모임 유형을 선택해주세요',
    }),
    meetingType: z.enum(['ONLINE', 'OFFLINE'], {
      required_error: '모임 방식을 선택해주세요',
      invalid_type_error: '모임 방식을 선택해주세요',
    }),
    targetDate: z.date({
      required_error: '만나는 날짜를 선택해주세요',
      invalid_type_error: '올바른 날짜를 선택해주세요',
    }),
    endDate: z.date({
      required_error: '모집 마감 날짜를 선택해주세요',
      invalid_type_error: '올바른 날짜를 선택해주세요',
    }),
    memberLimit: z
      .number({
        required_error: '모임 정원을 입력해주세요',
        invalid_type_error: '모임 정원을 숫자로 입력해주세요',
      })
      .min(3, '최소 3명 이상 입력해주세요')
      .max(20, '최대 20명까지 가능합니다'),
    city: z
      .string({
        required_error: '시/군/구를 선택해주세요',
      })
      .optional(),
    town: z
      .string({
        required_error: '동/읍/면을 선택해주세요',
      })
      .optional(),
    address: z
      .string({
        required_error: '주소를 선택해주세요',
      })
      .optional(),
    detailAddress: z
      .string({
        required_error: '상세 주소를 입력해주세요',
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.meetingType === 'OFFLINE') {
      if (!data.city?.trim() || !data.town?.trim() || !data.address?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '모임 장소를 정해주세요!',
          path: ['meetingType'],
        });
      }
    }
  });

export type BookClubForm = z.infer<typeof bookClubSchema>;
