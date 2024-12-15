import React from 'react';
import Image from 'next/image';
import authImage from '../../../../../public/images/authImage.png';

interface AuthImageProps {
  isLoginPage?: boolean;
}

export default function AuthImage({ isLoginPage = false }: AuthImageProps) {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-center">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-[40px] font-bold text-green-normal-01">bookco</h1>
        <p className="text-center text-xl font-bold text-green-normal-01">
          책으로 엮는 커뮤니티
        </p>
        <p className="mt-2 text-center text-sm text-gray-darker md:text-base">
          깊이 책을 읽고, 교환하며 독서 경험을 확장해보세요!
        </p>
      </div>
      <div
        className={`mb-8 w-full max-w-[400px] md:mb-0 ${
          isLoginPage ? 'block' : 'hidden lg:block'
        }`}
      >
        <Image
          src={authImage}
          alt="profile"
          width={500}
          height={310}
          className="h-auto w-[300px] md:w-[400px] lg:w-[500px]"
          priority
        />
      </div>
    </div>
  );
}
