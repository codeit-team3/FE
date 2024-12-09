export const DROPDOWN_LABELS = {
  navbar: '',
  onOff: '온/오프라인',
  memberCount: '인원수',
  sortingReview: '최신순',
} as const;

export const MENU_ITEMS = {
  navbar: [
    { value: 'MY_PAGE', label: '마이페이지' },
    { value: 'LOGOUT', label: '로그아웃' },
  ],
  onOff: [
    { value: 'TOTAL', label: '온/오프라인' },
    { value: 'ONLINE', label: '온라인' },
    { value: 'OFFLINE', label: '오프라인' },
  ],
  memberCount: [
    { value: 'TOTAL', label: '전체' },
    { value: 'TWO_FOUR', label: '2~4명' },
    { value: 'FIVE_SEVEN', label: '5~7명' },
    { value: 'EIGHT_TEN', label: '8~10명' },
    { value: 'OVER_ELEVEN', label: '11명 이상' },
  ],
  sortingReview: [
    { value: 'LATEST', label: '최신순' },
    { value: 'HIGHEST', label: '리뷰높은순' },
    { value: 'LOWEST', label: '리뷰낮은순' },
  ],
} as const;

export type DropDownLabels = keyof typeof DROPDOWN_LABELS;
export type MenuItems = keyof typeof MENU_ITEMS;
