import type { Meta, StoryObj } from '@storybook/react';
import Button2 from './Button2';

const meta: Meta<typeof Button2> = {
  title: 'Components/Button',
  component: Button2,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button2>;

export const Primary2: Story = {
  args: {
    // 버튼 props
  },
};
