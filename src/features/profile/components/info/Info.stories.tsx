import type { Meta, StoryObj } from '@storybook/react';
import Info from './Info';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockUser } from '@/mocks/mockDatas';

const queryClient = new QueryClient();

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
