import type { Meta, StoryObj } from '@storybook/react';
import MessageInput from './MessageInput';

const meta = {
  title: 'Components/Input/MessageInput',
  component: MessageInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageInput>;

export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Message:', e.target.value),
  },
};
