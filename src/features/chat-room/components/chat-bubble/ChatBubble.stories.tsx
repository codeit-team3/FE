import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from './ChatBubble';

const meta = {
  title: 'Features/ChatRoom/ChatBubbleList/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const MyMessage: Story = {
  args: {
    variant: 'ME',
    props: {
      content: '안녕하세요! 반갑습니다.',
      time: '오후 2:30',
    },
  },
  render: (args) => <ChatBubble {...args} />,
};

export const OpponentMessage: Story = {
  args: {
    variant: 'OPPONENT',
    props: {
      content: `을지로에서 만나는 독서 모임은 아래와 같이 진행될 예정입니다! 궁금한 점이 있다면 언제든 말씀해 주세요.
그럼 일정에서 뵙겠습니다:)

일자 : 12/14
장소 : 을지로1가 87, 카페 적당
시간 : 오전 10시, 3시간 진행 예정
준비물 : 각자 읽고 싶은 책

* 늦게 오시는 분은 미리 말씀 부탁드려요!`,
      time: '오후 2:31',
      name: '김철수',
      image: 'https://picsum.photos/200',
      isHost: true,
    },
  },
  argTypes: {
    props: {
      isHost: {
        control: 'boolean',
      },
    },
  },
  render: (args) => <ChatBubble {...args} />,
};

export const SystemMessage: Story = {
  args: {
    variant: 'SYSTEM',
    props: {
      username: '이영희',
      action: 'JOIN',
    },
  },
  argTypes: {
    props: {
      action: {
        control: 'radio',
        options: ['JOIN', 'LEAVE'],
      },
    },
  },
  render: (args) => <ChatBubble {...args} />,
};
