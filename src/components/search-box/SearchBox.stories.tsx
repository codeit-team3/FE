import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta = {
  title: 'Components/SearchBox',
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
    placeholder: '검색어를 입력해주세요',
  },
};
