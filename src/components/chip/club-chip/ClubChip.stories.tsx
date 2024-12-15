import type { Meta, StoryObj } from '@storybook/react';
import ClubChip from './ClubChip';

const meta = {
  title: 'Components/Chip/ClubChip',
  component: ClubChip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ClubChip>;

export default meta;
type Story = StoryObj<typeof ClubChip>;

export const Completed: Story = {
  args: {
    variant: 'completed',
  },
};

export const Scheduled: Story = {
  args: {
    variant: 'scheduled',
  },
};

export const Pending: Story = {
  args: {
    variant: 'pending',
  },
};

export const Confirmed: Story = {
  args: {
    variant: 'confirmed',
  },
};

export const FreeBook: Story = {
  args: {
    variant: 'FREE',
  },
};

export const FixedBook: Story = {
  args: {
    variant: 'FIXED',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-2">
      <ClubChip variant="completed" />
      <ClubChip variant="scheduled" />
      <ClubChip variant="pending" />
      <ClubChip variant="confirmed" />
      <ClubChip variant="closed" />
      <ClubChip variant="FREE" />
      <ClubChip variant="FIXED" />
    </div>
  ),
};
