import type { Meta, StoryObj } from '@storybook/react';
import Info from './Info';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { User } from '@/types/user';

const queryClient = new QueryClient();

const mockUser: User = {
  id: 123,
  nickname: 'test',
  email: 'john.doe@example.com',
  name: 'John Doe',
  description: 'Example Company',
  createdAt: new Date('2024-01-01T00:00:00Z'),
  updatedAt: new Date('2024-01-10T00:00:00Z'),
};

const meta = {
  title: 'Components/Info',
  component: Info,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: mockUser,
    isMyPage: true,
  },
};
