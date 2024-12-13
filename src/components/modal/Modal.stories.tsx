import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달의 표시 여부를 제어합니다',
    },
    title: {
      control: 'text',
      description: '모달의 제목',
    },
    onClose: { action: '닫기 클릭' },
    onConfirm: { action: '확인 클릭' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    cancelText: '취소',
    confirmText: '확인',
    children: '모달에 넣을 children',
    onClose: () => console.log('닫기 클릭'),
    onConfirm: () => console.log('확인 클릭'),
    cancelButtonProps: {
      themeColor: 'gray-dark-01',
      lightColor: 'gray-normal-01',
      fillType: 'lightSolid',
    },
    confirmButtonProps: {
      themeColor: 'green-normal-01',
      lightColor: 'green-light-03',
      fillType: 'lightSolid',
    },
  },
};
