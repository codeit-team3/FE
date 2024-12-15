import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: '다양한 스타일과 크기를 지원하는 버튼 컴포넌트',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    text: '확인',
    size: 'medium',
    fillType: 'solid',
    themeColor: 'green-normal-01',
  },
};
export const Outline: Story = {
  args: {
    text: '확인',
    size: 'medium',
    fillType: 'outline',
    themeColor: 'green-normal-01',
  },
};

export const LightSolid: Story = {
  args: {
    text: '확인',
    size: 'modal',
    fillType: 'lightSolid',
    themeColor: 'green-normal-01',
    lightColor: 'green-light-03',
  },
};
export const Small: Story = {
  args: {
    text: '확인',
    size: 'small',
    fillType: 'outline',
    themeColor: 'green-light-03',
  },
};

export const Submitting: Story = {
  args: {
    text: '확인',
    size: 'large',
    fillType: 'solid',
    themeColor: 'gray-normal-03',
    isSubmitting: true,
  },
  parameters: {
    docs: {
      description: {
        story: '로그인 및 회원가입에서 사용하는 버튼입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    text: '생성하기',
    size: 'large',
    fillType: 'lightSolid',
    themeColor: 'gray-dark-01',
    lightColor: 'gray-normal-01',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 버튼입니다. 클릭이 불가능한 상태입니다.',
      },
    },
  },
};
