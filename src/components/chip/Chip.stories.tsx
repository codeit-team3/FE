import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const RoundedFilled: Story = {
  args: {
    text: '모집중',
    variant: 'rounded-filled',
  },
};

export const RoundedLight: Story = {
  args: {
    text: '1월 7일',
    variant: 'rounded-light',
  },
};

export const SquareOutlined: Story = {
  args: {
    text: '오프라인',
    variant: 'square-light',
  },
};

export const SquareFilled: Story = {
  args: {
    text: '마감',
    variant: 'square-filled',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip text="모집중" variant="rounded-filled" />
      <Chip text="1월 7일" variant="rounded-light" />
      <Chip text="오프라인" variant="square-light" />
      <Chip text="마감" variant="square-filled" />
    </div>
  ),
};
