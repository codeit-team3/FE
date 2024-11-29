import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CustomizedButton: Story = {
  args: {
    text: '생성하기',
    size: 'large',
    hasBackground: true,
    disabled: false,
  },
};
