import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import Avatar from '@/components/avatar/Avatar';
import Modal from '@/components/modal/Modal';
import { EditIcon } from '../../../../../public/icons';

interface ProfileData {
  name: string;
  description: string;
  image?: string | null;
}

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (updatedData: ProfileData) => void;
  profileData: ProfileData;
}

function ProfileEditContent({
  formData,
  handleChange,
  handleFileChange,
  preview,
}: {
  formData: ProfileData;
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
              src={preview || formData.image || '/images/profile.png'}
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
              name="name"
              aria-label="name"
              value={formData.name}
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
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-light-02 p-2 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileEditModal({
  isOpen,
  onClose,
  onConfirm,
  profileData,
}: ProfileEditModalProps) {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState<ProfileData>({
    name: profileData.name || user?.name || '',
    description: profileData.description || user?.description || '',
    image: profileData.image || user?.image || '/images/profile.png',
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileResult = reader.result as string;
        setPreview(fileResult);
        setFormData((prev) => ({ ...prev, image: fileResult }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      <ProfileEditContent
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        preview={preview}
      />
    </Modal>
  );
}

export default ProfileEditModal;
