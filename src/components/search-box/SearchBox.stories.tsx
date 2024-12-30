import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';
import PencilIcon from '../../../public/icons/PencilIcon';

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

export const MessageInput: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Message:', e.target.value),
    placeholder: '메세지를 입력해주세요',
    icon: <PencilIcon />,
    className: 'bg-gray-light-02 border-none',
  },
};
