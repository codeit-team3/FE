import type { Meta, StoryObj } from '@storybook/react';
import { TextChip } from './TextChip';

const meta = {
  title: 'Components/TextChip',
  component: TextChip,
} satisfies Meta<typeof TextChip>;

export default meta;
type Story = StoryObj<typeof TextChip>;

export const Default: Story = {
  args: {
    text: '기본',
    isTime: false,
  },
};

export const Time: Story = {
  args: {
    text: '17:30',
    isTime: true,
  },
};

export const MultipleChips: Story = {
  args: {
    text: '',
    isTime: false,
  },
  render: () => (
    <div className="flex gap-2">
      <TextChip text="1월 7일" />
      <TextChip text="17:30" isTime={true} />
    </div>
  ),
};
