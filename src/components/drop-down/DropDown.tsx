interface DropDownProps {
  variant: 'navbar' | 'find' | 'profile' | 'review';
  size: 'navbar' | 'large' | 'small';
}

const VARIANTS = {
  navbar: ['마이페이지', '로그아웃'],
  find: ['마감임박 순', '가까운 모임 날짜 순'],
  profile: ['최신순', '오래된 순'],
  review: ['평점 높은 순', '평점 낮은 순'],
};

const SIZE = {
  navbar: `w-[40px] h-[40px]`,
  small: `w-[36px] h-[36px]`,
  large: `w-[110px] h-[40px]`,
};

function DropDown({ variant, size }: DropDownProps) {
  const itemList = VARIANTS[variant];

  return (
    <div className="">
      <ul>
        <button className={`${SIZE[size]}`}>메뉴 보기</button>
        {itemList.map((item, index) => (
          <li key={index} className={`h-[40px] w-[110px]`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
