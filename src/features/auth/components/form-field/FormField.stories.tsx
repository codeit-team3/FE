import type { Meta, StoryObj } from '@storybook/react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Auth/FormField',
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const EmailField: Story = {
  args: {
    label: '아이디',
    type: 'text',
    placeholder: '이메일을 입력해주세요',
    id: 'email',
  },
};

export const PasswordField: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    id: 'password',
  },
};
