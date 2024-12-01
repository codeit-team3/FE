import type { Meta, StoryObj, StoryFn } from '@storybook/react';
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
    onLikeToggleClick: { action: 'like toggled' },
    onJoinClick: { action: 'join clicked' },
    isConfirmed: {
      control: 'boolean',
      description: '모임 개설 확정 여부',
    },
    isLiked: {
      control: 'boolean',
      description: '찜하기 여부',
    },
    isEnded: {
      control: 'boolean',
      description: '마감 여부',
    },
  },
} satisfies Meta<typeof CardListItem>;

export default meta;
type Story = StoryObj<typeof CardListItem>;

// 기본 props
const defaultArgs = {
  title: '달램핏 마인드풀니스',
  location: '을지로 3가',
  date: '1월 7일',
  time: '17:30',
  currentParticipants: 18,
  maxParticipants: 20,
  imageUrl: 'https://picsum.photos/200/300?random=1',
};

// 화면 크기별 decorator 설정
const viewportDecorators = {
  mobile: {
    viewport: { defaultViewport: 'mobile' },
    width: 'w-[340px]',
  },
  tablet: {
    viewport: { defaultViewport: 'tablet' },
    width: 'w-[680px]',
  },
  desktop: {
    viewport: { defaultViewport: 'desktop' },
    width: 'w-[1280px]',
  },
};

// 상태 조합 생성
const stateVariants = [
  { name: 'Default', states: {} },
  { name: 'Confirmed', states: { isConfirmed: true } },
  { name: 'Liked', states: { isLiked: true } },
  { name: 'Ended', states: { isEnded: true } },
  { name: 'ConfirmedAndLiked', states: { isConfirmed: true, isLiked: true } },
  { name: 'EndedAndLiked', states: { isEnded: true, isLiked: true } },
];

export const stories: Record<string, Story> = {};

Object.entries(viewportDecorators).forEach(([viewport, config]) => {
  stateVariants.forEach(({ name, states }) => {
    const storyName = `${viewport.charAt(0).toUpperCase() + viewport.slice(1)}_${name}`;
    stories[storyName] = {
      args: {
        ...defaultArgs,
        ...states,
      },
      parameters: {
        viewport: config.viewport,
      },
      decorators: [
        (Story: StoryFn) => (
          <div className={config.width}>
            <Story />
          </div>
        ),
      ],
    };
  });
});

// 각 스토리를 개별적으로 export
export const Mobile_Default = stories['Mobile_Default'];
export const Mobile_Confirmed = stories['Mobile_Confirmed'];
export const Tablet_Default = stories['Tablet_Default'];
export const Tablet_Confirmed = stories['Tablet_Confirmed'];
export const Desktop_Default = stories['Desktop_Default'];
export const Desktop_Confirmed = stories['Desktop_Confirmed'];

// 특수 상태 스토리 (참가자 수 관련)
export const AlmostFull: Story = {
  args: {
    ...defaultArgs,
    currentParticipants: 19,
    maxParticipants: 20,
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="w-[1020px]">
        <Story />
      </div>
    ),
  ],
};

export const Full: Story = {
  args: {
    ...defaultArgs,
    currentParticipants: 20,
    maxParticipants: 20,
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="w-[1020px]">
        <Story />
      </div>
    ),
  ],
};
