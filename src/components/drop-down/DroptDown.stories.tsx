import { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown';

const meta = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
    componentSubtitle:
      '드롭다운 컴포넌트. 정렬 기준을 보여줄 때, NavBar에서 프로필 이미지를 눌렀을 때 사용됨',
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarLarge: Story = {
  args: {
    variant: 'navbar',
    items: [
      { value: 1, label: '마이페이지' },
      { value: 2, label: '로그아웃' },
    ],
  },
};

export const FilteringLarge: Story = {
  args: {
    variant: 'filtering',
    items: [
      { value: 1, label: '온/오프라인' },
      { value: 1, label: '온라인' },
      { value: 2, label: '오프라인' },
    ],
    label: '온/오프라인',
  },
};

export const FilteringSmall: Story = {
  args: {
    variant: 'filtering',
    items: [
      { value: 1, label: '전체' },
      { value: 1, label: '2~4명' },
      { value: 2, label: '5~7명' },
      { value: 3, label: '8~10명' },
      { value: 4, label: '11명 이상' },
    ],
    label: '인원수',
  },
};
