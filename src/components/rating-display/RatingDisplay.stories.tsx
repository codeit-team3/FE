import type { Meta, StoryObj } from '@storybook/react';
import RatingDisplay from './RatingDisplay';

const meta = {
  title: 'Components/RatingDisplay',
  component: RatingDisplay,
} satisfies Meta<typeof RatingDisplay>;

export default meta;
type Story = StoryObj<typeof RatingDisplay>;

export const FourStarRating: Story = {
  args: {
    ratingCount: 4,
  },
};
