export const DROPDOWN_LABELS = {
  navbar: { value: '', label: '' },
  onOff: { value: 'ALL', label: '온/오프라인' },
  memberCount: { value: 'TOTAL', label: '인원수' },
  sortingReview: { value: 'DESC', label: '최신순' },
} as const;

export const MENU_ITEMS = {
  navbar: [
    { value: 'MY_PAGE', label: '마이페이지' },
    { value: 'LOGOUT', label: '로그아웃' },
  ],
  onOff: [
    { value: 'ALL', label: '온/오프라인' },
    { value: 'ONLINE', label: '온라인' },
    { value: 'OFFLINE', label: '오프라인' },
  ],
  memberCount: [
    { value: 'TOTAL', label: '전체' },
    { value: 'THREE_FIVE', label: '3~5명' },
    { value: 'SIX_EIGHT', label: '6~8명' },
    { value: 'NINE_ELEVEN', label: '9~11명' },
    { value: 'OVER_TWELVE', label: '12명 이상' },
  ],
  sortingReview: [
    { value: 'DESC', label: '최신순' },
    { value: 'RATE_DESC', label: '리뷰높은순' },
    { value: 'RATE_ASC', label: '리뷰낮은순' },
  ],
} as const;

export type MenuItem = { value: string; label: string };

export type MenuItems = keyof typeof MENU_ITEMS;
