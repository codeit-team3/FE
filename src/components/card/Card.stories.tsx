import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onLikeToggleClick: { action: 'like toggled' },
    onJoinClick: { action: 'join clicked' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

const defaultArgs = {
  title: '테스트 모임',
  location: '서울 강남구',
  date: '2024.04.01',
  time: '19:00',
  currentParticipants: 5,
  maxParticipants: 10,
  imageUrl: 'https://picsum.photos/200/300',
};

// 뷰포트별 데코레이터 설정
const viewportDecorators = {
  mobile: {
    viewport: { defaultViewport: 'mobile' },
    width: 'w-[330px]',
  },
  tablet: {
    viewport: { defaultViewport: 'tablet' },
    width: 'w-[700px]',
  },
  desktop: {
    viewport: { defaultViewport: 'desktop' },
    width: 'w-[1020px]',
  },
};

// 모바일 스토리
export const Mobile_Default: Story = {
  args: defaultArgs,
  parameters: {
    viewport: viewportDecorators.mobile.viewport,
  },
  decorators: [
    (Story) => (
      <div className={viewportDecorators.mobile.width}>
        <Story />
      </div>
    ),
  ],
};

export const Mobile_Ended: Story = {
  args: {
    ...defaultArgs,
    isEnded: true,
    isLiked: true,
  },
  parameters: {
    viewport: viewportDecorators.mobile.viewport,
  },
  decorators: Mobile_Default.decorators,
};

// 태블릿 스토리
export const Tablet_Default: Story = {
  args: defaultArgs,
  parameters: {
    viewport: viewportDecorators.tablet.viewport,
  },
  decorators: [
    (Story) => (
      <div className={viewportDecorators.tablet.width}>
        <Story />
      </div>
    ),
  ],
};

export const Tablet_Ended: Story = {
  args: {
    ...defaultArgs,
    isEnded: true,
    isLiked: true,
  },
  parameters: {
    viewport: viewportDecorators.tablet.viewport,
  },
  decorators: Tablet_Default.decorators,
};

// 데스크톱 스토리
export const Desktop_Default: Story = {
  args: defaultArgs,
  parameters: {
    viewport: viewportDecorators.desktop.viewport,
  },
  decorators: [
    (Story) => (
      <div className={viewportDecorators.desktop.width}>
        <Story />
      </div>
    ),
  ],
};

export const Desktop_Ended: Story = {
  args: {
    ...defaultArgs,
    isEnded: true,
    isLiked: true,
  },
  parameters: {
    viewport: viewportDecorators.desktop.viewport,
  },
  decorators: Desktop_Default.decorators,
};
