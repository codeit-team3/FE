import type { Meta, StoryObj } from '@storybook/react';
import SubmitButton from './SubmitButton';

const meta: Meta<typeof SubmitButton> = {
  title: 'Auth/SubmitButton',
  component: SubmitButton,
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    children: '로그인',
  },
};
