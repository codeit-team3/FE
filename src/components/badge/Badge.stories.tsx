import Badge from '@/components/badge/Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    count: 1,
    size: 'md',
    variant: 'default',
  },
};

export const DefaultBadgeSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge count={1} size="sm" />
      <Badge count={1} size="md" />
      <Badge count={1} size="lg" />
    </div>
  ),
};

export const DefaultBadgeNumbers: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge count={1} />
      <Badge count={99} />
      <Badge count={999} />
      <Badge count={1000} />
    </div>
  ),
};

export const DotBadge: Story = {
  args: {
    variant: 'dot',
    size: 'md',
  },
};

export const DotBadgeSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  ),
};

export const CustomStyle: Story = {
  args: {
    count: 5,
    className: 'bg-blue-500',
  },
};
