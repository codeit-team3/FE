import { BookClubParams } from '@/types/bookclubs';

export const getMemberLimit = (selectedValue: string | undefined) => {
  switch (selectedValue) {
    case 'THREE_FIVE':
      return { min: 3, max: 5 };
    case 'SIX_EIGHT':
      return { min: 6, max: 8 };
    case 'NINE_ELEVEN':
      return { min: 9, max: 11 };
    case 'TWELVE':
      return { min: 12, max: 20 };
    default:
      return { min: 3, max: 20 };
  }
};

export const getMeetingType = (selectedLabel: string | undefined) => {
  const validValues: BookClubParams['meetingType'][] = [
    'ALL',
    'ONLINE',
    'OFFLINE',
  ];

  return validValues.includes(selectedLabel as BookClubParams['meetingType'])
    ? (selectedLabel as BookClubParams['meetingType'])
    : undefined;
};
