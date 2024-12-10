import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';
import { BOOK_TABS, CONTENT_TABS, MY_PAGE_TABS } from '@/constants/tabs';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabType: {
      control: 'select',
      options: ['BOOK', 'CONTENT', 'MY_PAGE'],
      description: '탭의 종류를 선택합니다',
    },
    items: {
      control: 'select',
      options: [BOOK_TABS, CONTENT_TABS, MY_PAGE_TABS],
      mapping: {
        BOOK_TABS: BOOK_TABS,
        CONTENT_TABS: CONTENT_TABS,
        MY_PAGE_TABS: MY_PAGE_TABS,
      },
      description: '탭 아이템 목록',
    },
    activeTab: {
      control: 'select',
      options: [...BOOK_TABS, ...CONTENT_TABS, ...MY_PAGE_TABS],
      description: '현재 선택된 탭',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    items: BOOK_TABS,
    activeTab: '전체',
    onTabChange: (tab) => console.log(`Selected tab: ${tab}`),
    tabType: 'BOOK',
  },
};
