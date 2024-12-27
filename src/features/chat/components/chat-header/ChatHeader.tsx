import React from 'react';

function ChatHeader() {
  return (
    <header className="flex h-[120px] w-full min-w-[336px] items-end bg-green-light-01 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <h1 className="flex-nowrap text-[20px] font-bold leading-[30px] tracking-tighter text-black md:text-2xl">
        채팅에 활발히
        <br />
        참여해 보세요!
      </h1>
    </header>
  );
}

export default ChatHeader;
