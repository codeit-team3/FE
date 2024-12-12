import React from 'react';

const Profile = () => {
  return (
    <div className="mx-[86px] mt-[50px] flex-col">
      <div className="" role="upper">
        <div className="border text-xl font-bold text-gray-black">
          마이 페이지
        </div>
        <div className="mx-[5px] my-[20px] h-[200px] border">프로필</div>
      </div>
      <div className="border" role="container">
        <div className="border">
          메인탭
          <div className="border">버튼 모음</div>
          <div className="border">카드 컴포넌트 리스트</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
