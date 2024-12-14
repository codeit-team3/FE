import Profile from './profile/Profile';

function Header() {
  return (
    <div
      className="flex w-full min-w-[336px] flex-col items-center pb-[20px] pt-[24px] sm:pl-[20px] sm:pr-[19px] md:px-[24px] lg:px-[102px]"
      role="upper"
    >
      <h1 className="w-full min-w-[336px] text-xl font-bold text-gray-black">
        마이 페이지
      </h1>
      <Profile />
    </div>
  );
}

export default Header;