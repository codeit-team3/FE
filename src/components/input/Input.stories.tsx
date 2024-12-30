import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};

export const WithCustomStyle: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Input value:', e.target.value),
    placeholder: '입력해주세요',
    className: 'w-[400px]',
  },
};
