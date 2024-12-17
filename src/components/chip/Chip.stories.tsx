import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta = {
  title: 'Components/Chip/Base',
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
    variant: 'square-outlined',
  },
};

export const SquareFilled: Story = {
  args: {
    text: '마감',
    variant: 'square-filled',
  },
};

export const Past: Story = {
  args: {
    text: '자유책',
    variant: 'rounded-filled',
    isPast: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Chip text="모집중" variant="rounded-filled" />
        <Chip text="1월 7일" variant="rounded-light" />
        <Chip text="오프라인" variant="square-outlined" />
        <Chip text="마감" variant="square-filled" />
      </div>
      <div className="flex gap-2">
        <Chip text="자유책" variant="rounded-filled" isPast={true} />
        <Chip text="1월 7일" variant="rounded-light" isPast={true} />
        <Chip text="오프라인" variant="square-outlined" isPast={true} />
        <Chip text="마감" variant="square-filled" isPast={true} />
      </div>
    </div>
  ),
};
