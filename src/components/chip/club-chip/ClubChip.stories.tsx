import type { Meta, StoryObj } from '@storybook/react';
import ClubChip from './ClubChip';

const meta = {
  title: 'Components/ClubChip',
  component: ClubChip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ClubChip>;

export default meta;
type Story = StoryObj<typeof ClubChip>;

export const Completed: Story = {
  args: {
    text: '참여완료',
    variant: 'completed',
  },
};

export const Scheduled: Story = {
  args: {
    text: '참여예정',
    variant: 'scheduled',
  },
};

export const Pending: Story = {
  args: {
    text: '개설대기',
    variant: 'pending',
  },
};

export const Confirmed: Story = {
  args: {
    text: '개설확정',
    variant: 'confirmed',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-2">
      <ClubChip text="참여완료" variant="completed" />
      <ClubChip text="참여예정" variant="scheduled" />
      <ClubChip text="개설대기" variant="pending" />
      <ClubChip text="개설확정" variant="confirmed" />
    </div>
  ),
};
