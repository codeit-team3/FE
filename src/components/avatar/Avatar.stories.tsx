import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Avatar image',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Avatar image',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Avatar image',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Clickable Avatar',
    size: 'md',
    onClick: () => alert('Avatar clicked!'),
  },
};
