import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from './ChatBubble';

const meta = {
  title: 'Components/ChatBubble/Atoms',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatBubble>;

export default meta;

export const Box: StoryObj<typeof ChatBubble.Box> = {
  args: {
    variant: 'ME',
    children: '안녕하세요!',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['ME', 'OPPONENT'],
    },
  },
  render: (args) => <ChatBubble.Box {...args} />,
};

export const Time: StoryObj<typeof ChatBubble.Time> = {
  render: () => <ChatBubble.Time>오후 2:30</ChatBubble.Time>,
};

export const Profile: StoryObj<typeof ChatBubble.Profile> = {
  render: () => (
    <ChatBubble.Profile
      imageUrl="https://picsum.photos/200"
      name="홍길동"
      isHost={true}
    />
  ),
};

export const System: StoryObj<typeof ChatBubble.System> = {
  args: {
    username: '홍길동',
    action: 'JOIN',
  },
  argTypes: {
    action: {
      control: 'radio',
      options: ['JOIN', 'LEAVE'],
    },
  },
  render: (args) => <ChatBubble.System {...args} />,
};
