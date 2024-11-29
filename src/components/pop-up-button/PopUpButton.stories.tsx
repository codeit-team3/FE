import type { Meta, StoryObj } from '@storybook/react';
import PopUpButton from './PopUpButton';

const meta: Meta<typeof PopUpButton> = {
  title: 'components/PopUpButton',
  component: PopUpButton,
  parameters: {
    layout: 'centerd',
    componentSubtitle: '팝업 창 내의 취소/확인 버튼 컴포넌트',
  },
};

type Story = StoryObj<typeof PopUpButton>;
export const Confirm: Story = {
  args: {
    isConfirm: true,
  },
};

export const Cancel: Story = {
  args: {
    isConfirm: false,
  },
};

export default meta;
