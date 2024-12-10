import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

const mockUseRouter = () => ({
  useRouter: () => ({
    push: () => {},
    replace: () => {},
    refresh: () => {},
  }),
});

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/login',
        query: {},
      },
    },
    mockData: {
      router: mockUseRouter(),
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
