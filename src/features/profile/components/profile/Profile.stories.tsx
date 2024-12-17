import type { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';
import User from '../../types/user';

const mockUser: User = {
  teamId: '1',
  id: 123,
  email: 'john.doe@example.com',
  name: 'John Doe',
  description: 'Example Company',
  createdAt: new Date('2024-01-01T00:00:00Z'),
  updatedAt: new Date('2024-01-10T00:00:00Z'),
};

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
    user: mockUser,
  },
};
