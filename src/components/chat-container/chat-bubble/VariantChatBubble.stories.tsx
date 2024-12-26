import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from './ChatBubble';

const meta = {
  title: 'Components/ChatBubble/Variants',
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
      content: '네, 안녕하세요!',
      time: '오후 2:31',
      name: '김철수',
      profileImage: 'https://picsum.photos/200',
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
