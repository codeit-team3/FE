import { ChangeEvent } from 'react';
import Input from '../Input';
import PencilIcon from '../../../../public/icons/PencilIcon';

interface MessageBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MessageBox({ value, onChange }: MessageBoxProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={'메세지를 입력해주세요'}
      icon={<PencilIcon />}
      className="border-none bg-gray-light-02"
    />
  );
}

export default MessageBox;
