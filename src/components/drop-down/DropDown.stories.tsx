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

export const NavBar: Story = {
  args: {
    variant: 'navbar',
    onChangeSelection: (e) => alert(e),
  },
};

export const OnOff: Story = {
  args: {
    variant: 'onOff',
    onChangeSelection: (e) => alert(e),
  },
};

export const MemberCount: Story = {
  args: {
    variant: 'memberCount',
    onChangeSelection: (e) => alert(e),
  },
};

export const SortingReview: Story = {
  args: {
    variant: 'sortingReview',
    onChangeSelection: (e) => alert(e),
  },
};
