import { BookClubParams } from '@/types/bookclubs';

export const getMemberLimit = (selectedValue: string | undefined) => {
  switch (selectedValue) {
    case 'TWO_FOUR':
      return 4;
    case 'FIVE_SEVEN':
      return 7;
    case 'EIGHT_TEN':
      return 10;
    case 'OVER_ELEVEN':
      return 11;
    default:
      return undefined;
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
