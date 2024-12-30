import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta = {
  title: 'Components/Input/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Search value:', e.target.value),
  },
};
