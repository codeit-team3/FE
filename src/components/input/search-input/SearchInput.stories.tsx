import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';

const meta = {
  title: 'Components/Input/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Search value:', e.target.value),
  },
};
