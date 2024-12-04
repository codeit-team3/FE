import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import Avatar from '@/components/avatar/Avatar';

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const renderAvatars = (count: number) =>
  Array(count)
    .fill(null)
    .map((_, i) => (
      <Avatar
        key={i}
        src={`https://picsum.photos/200/200?random=${i}`}
        alt={`Avatar ${i + 1}`}
      />
    ));

export const Small: Story = {
  render: () => (
    <AvatarGroup maxCount={4} size="sm">
      {renderAvatars(16)}
    </AvatarGroup>
  ),
};

export const Medium: Story = {
  render: () => (
    <AvatarGroup maxCount={4} size="md">
      {renderAvatars(16)}
    </AvatarGroup>
  ),
};

export const Large: Story = {
  render: () => (
    <AvatarGroup maxCount={4} size="lg">
      {renderAvatars(16)}
    </AvatarGroup>
  ),
};

export const ShowMoreAvatars: Story = {
  render: () => (
    <AvatarGroup maxCount={6} size="md">
      {renderAvatars(16)}
    </AvatarGroup>
  ),
};

export const FewAvatars: Story = {
  render: () => (
    <AvatarGroup maxCount={4} size="md">
      {renderAvatars(3)}
    </AvatarGroup>
  ),
};
