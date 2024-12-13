import type { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';

const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    componentSubtitle: '목록의 아이템들의 순서를 정렬하게 만드는 컴포넌트',
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'byDate',
  },
};
