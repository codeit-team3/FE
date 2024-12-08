import type { Meta, StoryObj } from '@storybook/react';
import SortingButton from './SortingButton';

const meta = {
  title: 'Components/SortingButton',
  component: SortingButton,
  parameters: {
    componentSubtitle: '목록의 아이템들의 순서를 정렬하게 만드는 컴포넌트',
  },
} satisfies Meta<typeof SortingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeDefault: Story = {
  args: {
    label: '마감 임박',
    isActive: false,
    isLarge: true,
  },
};
export const LargeActive: Story = {
  args: {
    label: '마감 임박',
    isActive: true,
    isLarge: true,
  },
};

export const SmallDefault: Story = {
  args: {
    label: '마감 임박',
    isActive: false,
    isLarge: false,
  },
};

export const SmallActive: Story = {
  args: {
    label: '마감 임박',
    isActive: true,
    isLarge: false,
  },
};
