export const NAV_ITEMS = [
  { id: 'bookco', href: '/bookclub', label: 'bookco' },
  { id: 'bookclub', href: '/bookclub', label: '책 모임' },
  { id: 'exchange', href: '/exchange', label: '책 교환' },
  { id: 'wish', href: '/wish', label: '찜 목록' },
  { id: 'chat', href: '/chat', label: '채팅' },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
