'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import Avatar from '@/components/avatar/Avatar';
import Modal from '@/components/modal/Modal';
import { EditIcon } from '../../../../../public/icons';
import { EditInfoParams } from '../../types';

interface InfoEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (formData: EditInfoParams) => void;
  infoData: EditInfoParams;
}

function InfoEditContent({
  formData,
  handleChange,
  handleFileChange,
  preview,
}: {
  formData: EditInfoParams;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  preview: string | null;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-normal-01">
            <Avatar
              src={
                preview || formData.image?.toString() || '/images/profile.png'
              }
              alt="프로필 이미지"
              size="xl"
            />
          </div>
          <input
            type="file"
            id="profile-upload"
            name="image"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            htmlFor="profile-upload"
            className="absolute bottom-0 right-0 translate-x-1/3 rounded-full border border-gray-normal-01 bg-white p-2"
          >
            <EditIcon
              width={14}
              height={18}
              className="cursor-pointer text-gray-dark-01"
            />
          </label>
        </div>

        <div className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <span className="font-bold">닉네임</span>
            <input
              type="text"
              name="nickname"
              aria-label="nickname"
              value={formData.user?.nickname}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-light-02 p-2 font-medium"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">한 줄 소개</span>
            <input
              type="text"
              name="description"
              aria-label="description"
              value={formData.user?.description}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-light-02 p-2 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InfoEditModal({
  isOpen,
  onClose,
  onConfirm,
  infoData,
}: InfoEditModalProps) {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState<EditInfoParams>({
    image: infoData.image || user?.image || '/images/profile.png',
    user: {
      nickname: infoData.user?.nickname || user?.name || '',
      description: infoData.user?.description || user?.description || '',
    },
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileResult = reader.result as string;
        setPreview(fileResult);
        setFormData((prev) => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };

  const handleConfirm = () => {
    onConfirm(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="프로필 수정하기"
      onConfirm={handleConfirm}
      cancelText="취소하기"
      confirmText="수정하기"
      cancelButtonProps={{
        themeColor: 'gray-dark-01',
        lightColor: 'gray-normal-01',
        fillType: 'lightSolid',
      }}
      confirmButtonProps={{
        themeColor: 'green-normal-01',
        lightColor: 'green-light-03',
        fillType: 'lightSolid',
      }}
    >
      <InfoEditContent
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        preview={preview}
      />
    </Modal>
  );
}
