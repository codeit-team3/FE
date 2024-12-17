import type { Meta, StoryObj } from '@storybook/react';
import HeaderBar from './HeaderBar';

const mockAuthStore = {
  isLoggedIn: true,
  user: {
    image: 'https://via.placeholder.com/32',
  },
};

declare global {
  var usePathname: () => string;
  var useRouter: () => Record<string, unknown>;
  var useAuthStore: () => typeof mockAuthStore;
}

const meta: Meta<typeof HeaderBar> = {
  title: 'Components/HeaderBar',
  component: HeaderBar,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => {
      global.useRouter = () => ({
        push: () => {},
        replace: () => {},
        prefetch: () => Promise.resolve(),
        back: () => {},
        pathname: '/',
        route: '/',
      });
      global.usePathname = () => '/';
      global.useAuthStore = () => mockAuthStore;

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {
  render: () => <HeaderBar />,
};
