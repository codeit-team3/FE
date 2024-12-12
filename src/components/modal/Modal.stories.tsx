import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    cancelText: '취소',
    confirmText: '확인',
    children: '모달 내용입니다.',
    onClose: () => console.log('닫기 클릭'),
    onConfirm: () => console.log('확인 클릭'),
  },
};

export const CustomButtons: Story = {
  args: {
    ...Default.args,
    cancelButtonProps: {
      themeColor: 'gray-darker',
    },
    confirmButtonProps: {
      themeColor: 'green-light-03',
    },
  },
};
