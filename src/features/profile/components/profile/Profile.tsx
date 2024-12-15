'use client';

import { useState } from 'react';
import Avatar from '@/components/avatar/Avatar';
import { IcEdit } from '../../../../../public/icons/index';
import ProfileEditModal from '../ProfileEditModal';
import { ProfileEditData, ProfilePageProps } from '../../types';

function Profile({ user }: ProfilePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmitEditProfile = (formData: ProfileEditData) => {
    alert(`name:${formData.name}, companyName:${formData.description}`);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-5 w-full min-w-[336px] flex-col">
      {isModalOpen && (
        <ProfileEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={(formData) => onSubmitEditProfile(formData)}
          profileData={{
            name: user?.name || '',
            description: user?.description || '',
            image: user?.image,
          }}
        />
      )}
      {/* 프로필 제목 */}
      {/* TODO: 프로필 페이지가 로그인된 유저의 프로필 페이지와 일치 여부 확인 후 수정하기 아이콘 hidden or none */}
      <div
        className="flex h-[60px] w-full justify-between rounded-t-3xl border-l-2 border-r-2 border-t-2 border-green-light-02 bg-green-light-01 px-6 py-3.5"
        role="title"
      >
        <label className="text-xl font-semibold text-green-dark-01">
          {user?.name}님의 프로필
        </label>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-white"
          aria-label="프로필 수정"
          onClick={() => setIsModalOpen(true)}
        >
          <IcEdit />
        </button>
      </div>
      {/* 프로필 내용 */}
      <div
        className="flex w-full justify-between rounded-b-3xl border-b-2 border-l-2 border-r-2 border-gray-normal-01 bg-gray-light-01 px-6 py-[30px]"
        role="content"
      >
        {/* 프로필 이미지 */}
        <div className="mr-6 h-[80px] w-[80px] rounded-full border-[3px] border-gray-normal-01">
          <Avatar
            src={user?.image ?? '/images/profile.png'}
            alt="profile_page_profile_image"
            size="max"
          />
        </div>
        {/* 프로필 정보 */}
        <div className="flex w-full flex-col">
          <div className="mb-[14px] text-2xl font-bold text-green-normal-01">
            {user?.name}님
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-y-1.5 sm:flex-col md:flex-row lg:flex-row">
              <span className="mr-1.5 whitespace-nowrap text-base font-semibold text-gray-black">
                이메일
              </span>
              <span className="text-base font-medium text-gray-darker">
                {user?.email}
              </span>
            </div>
            <div className="flex gap-y-1.5 sm:flex-col md:flex-row lg:flex-row">
              <span className="mr-1.5 whitespace-nowrap text-base font-semibold text-gray-black">
                한 줄 소개
              </span>
              <p className="whitespace-pre-wrap text-base font-medium text-gray-darker">
                {user?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
