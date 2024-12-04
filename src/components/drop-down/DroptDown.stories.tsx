import { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown';
import { Radio } from '@headlessui/react';

const meta = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: {
    componentSubtitle:
      '드롭다운 컴포넌트. 정렬 기준을 보여줄 때, NavBar에서 프로필 이미지를 눌렀을 때 사용됨',
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarLarge: Story = {
  argTypes: {
    variant: {
      options: ['navbar', 'filtering', 'sorting'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],

      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'filtering',
    items: ['3명 이하', '7명 이하', '10명 이하', '10명 이상'],
    size: 'large',
  },
};
