import type { Meta, StoryObj } from '@storybook/react';
import CardListItem from './CardListItem';

const meta = {
  title: 'Components/CardListItem',
  component: CardListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    isConfirmed: {
      control: 'boolean',
      description: '모임 개설 확정 여부',
    },
    currentParticipants: {
      control: { type: 'number', min: 0, max: 100 },
      description: '현재 참가자 수',
    },
    maxParticipants: {
      control: { type: 'number', min: 1, max: 100 },
      description: '최대 참가자 수',
    },
  },
} satisfies Meta<typeof CardListItem>;

export default meta;
type Story = StoryObj<typeof CardListItem>;

const defaultArgs = {
  title: '달램핏 스트레칭',
  location: '을지로 3가',
  date: '1월 7일',
  time: '17:30',
  currentParticipants: 18,
  maxParticipants: 20,
  isConfirmed: true,
  imageUrl: 'https://picsum.photos/200/300?random=1',
};

// 모바일 뷰 (375px)
export const Mobile: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[375px]">
        <Story />
      </div>
    ),
  ],
};

// 태블릿 뷰 (744px)
export const Tablet: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[744px]">
        <Story />
      </div>
    ),
  ],
};

// 데스크톱 뷰 (1920px)
export const Desktop: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[1920px]">
        <Story />
      </div>
    ),
  ],
};

// 상태별 스토리
export const NotConfirmed: Story = {
  args: {
    ...defaultArgs,
    isConfirmed: false,
  },
};

export const AlmostFull: Story = {
  args: {
    ...defaultArgs,
    currentParticipants: 19,
    maxParticipants: 20,
  },
};

export const Full: Story = {
  args: {
    ...defaultArgs,
    currentParticipants: 20,
    maxParticipants: 20,
  },
};
