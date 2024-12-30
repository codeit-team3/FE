import type { Meta, StoryObj } from '@storybook/react';
import MessageBox from './MessageBox';

const meta = {
  title: 'Components/Input/MessageBox',
  component: MessageBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageBox>;

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Message:', e.target.value),
  },
};
