'use client';

import { useState } from 'react';
import Avatar from '@/components/avatar/Avatar';
import { InfoEditModal } from './index';
import { EditInfoParams, ProfilePageProps } from '../../types';
import IconButton from '@/components/icon-button/IconButton';
import { IcEdit } from '../../../../../public/icons';
import { useEditInfo } from '../../hooks/useEditInfo';

export default function Info({ user, isMyPage }: ProfilePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { onSubmit } = useEditInfo();

  const onSubmitEditInfo = async (data: EditInfoParams) => {
    await onSubmit(data);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-5 w-full min-w-[336px] flex-col">
      {/* 프로필 제목 */}
      <div
        className="flex h-[60px] w-full justify-between rounded-t-3xl border-l-2 border-r-2 border-t-2 border-green-light-02 bg-green-light-01 px-6 py-3.5"
        role="title"
      >
        <label className="text-xl font-semibold text-green-dark-01">
          {isMyPage ? '나' : (user?.nickname ?? '북코' + '님')}의 프로필
        </label>
        {isMyPage && (
          <IconButton
            icon={<IcEdit />}
            aria-label="프로필 수정"
            onClick={() => setIsModalOpen(true)}
          />
        )}
      </div>
      {/* 프로필 내용 */}
      <div
        className="flex w-full justify-between rounded-b-3xl border-b-2 border-l-2 border-r-2 border-gray-normal-01 bg-gray-light-01 px-6 py-[30px]"
        role="content"
      >
        {/* 프로필 이미지 */}
        <div className="mr-6 h-[80px] w-[80px] items-center justify-center rounded-full border-[3px] border-gray-normal-01">
          <Avatar
            src={user?.image || '/images/profile.png'}
            alt="profile_page_profile_image"
            size="profile"
          />
        </div>
        {/* 프로필 정보 */}
        <div className="flex w-full flex-col">
          <div className="mb-[14px] text-2xl font-bold text-green-normal-01">
            {user?.nickname ?? '북코'}님
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
      {isModalOpen && (
        <InfoEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={(formData) => onSubmitEditInfo(formData)}
          infoData={{
            image: user?.image || '',
            user: {
              nickname: user?.nickname || '',
              description: user?.description || '',
            },
          }}
        />
      )}
    </div>
  );
}
