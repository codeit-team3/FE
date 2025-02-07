<div align="center">
<img width="652"  alt="image" src="https://github.com/user-attachments/assets/ddde3e13-b5d5-4dc0-880b-29dec240bdd1" />

> 📖 당신의 독서 생활에 새로운 페이지를 열어보세요!
<br/> 새로운 사람들과 함께 읽고 나누는 특별한 독서 경험, **북코**가 함께합니다.
> <br/>
<br/>[![Bookco](https://img.shields.io/badge/BOOKCO.SITE-00a991?style=for-the-badge)](https://bookco.vercel.app/)
</div

<br/>
<br/>
<br/>

## 🎯 Bookco에서 할 수 있는 일

- **👥 독서 모임**
    
    비슷한 취향을 가진 사람들과 함께 책을 읽고 이야기를 나눌 수 있습니다.
    - 정해진 책으로 독서 모임에 참여하거나, 직접 모임을 만들 수 있습니다.

- 💬 **채팅하기**
    
    다른 북코 유저들과 채팅 기능을 통해 소통할 수 있습니다.
    - 모임의 호스트나 교환하고 싶은 책을 가진 유저와 대화를 나눌 수 있습니다.
 
- **📚 교환하기 (추후 개발 예정..)**
    
    안 보게 된 책을 등록하면, 다른 사람의 책과 바꿔 읽을 수 있습니다.
    - 집에서 방치되던 책을 다른 유저와 공유할 수 있습니다.

<br/>
<br/>

## 📚 서비스 소개

<img width="1328" alt="image" src="https://github.com/user-attachments/assets/25ef2ed8-3cef-4b7a-b897-2f95324de9d9" />
<img width="1325" alt="image" src="https://github.com/user-attachments/assets/3f812c80-5b20-45ac-8c21-86bb87e76856" />
<img width="1329" alt="image" src="https://github.com/user-attachments/assets/25d9a7f6-8419-4f0b-86d3-f3d11ac38afa" />
<img width="1327" alt="image" src="https://github.com/user-attachments/assets/3a293a66-b502-4be0-a6d8-b02ed88f233f" />
<img width="1325" alt="image" src="https://github.com/user-attachments/assets/4b90f89f-b3d6-4331-8429-4a2280879f58" />
<img width="1324" alt="image" src="https://github.com/user-attachments/assets/4257b49f-c552-4963-866f-7c3338ab307b" />
<img width="1323" alt="image" src="https://github.com/user-attachments/assets/545fc19d-7ed6-4848-afb0-7452563bf8fb" />
<img width="1325" alt="image" src="https://github.com/user-attachments/assets/c751accd-74ec-4258-b285-5a976562759e" />
<img width="1326" alt="image" src="https://github.com/user-attachments/assets/f7824ee7-864b-4671-a889-d7181701ee9e" />

<br/>
<br/>

## 🛠️ 기술스택

### 💻 Core
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### 🔄 상태 관리
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge)

### 🌐 통신
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![SockJS](https://img.shields.io/badge/SockJS-000000?style=for-the-badge&logo=socket.io&logoColor=white)
![STOMP](https://img.shields.io/badge/STOMP-000000?style=for-the-badge)

### 🎨 스타일링
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### ⚙️ 유틸리티
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

### 🧪 테스팅
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

### 📋 코드 품질
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge)

<br/>
<br/>

## 🤝 팀 협업 방식, 브랜치 전략

### ✅ **PR 리뷰 방식**
- **2명 Approve** 방식
- PR 확인 시간 고정: `09:00`, `13:00`, `18:00`
- **Pn 룰**과 **Dn 룰** 적용
- **데일리 스크럼** 진행

### ✅ **브랜치 전략**
- **GitHub Flow** 적용
    - `feature` → `develop` → `main`
    - `hotfix` 는 Main에서 급하게 수정할 일 있을 때 사용
 
### ✅ **CI/CD 전략**
- **Husky**를 통한 코드 품질 관리
    - 커밋시 린트 검사
- **디스코드 웹훅 연결**로 실시간 알림
- PR 작성시 Lint 검사, test 코드 실행, 스토리북 빌드, 프로덕션 빌드 실행하여 검사

<br/>
<br/>

## 👥 팀원 구성

|FE|FE|FE|FE|
|:---:|:---:|:---:|:---:|
|<img src="https://avatars.githubusercontent.com/u/108677235?v=4" width="150"/>|<img src="https://avatars.githubusercontent.com/u/97824352?v=4" width="150"/>|<img src="https://avatars.githubusercontent.com/u/104830526?v=4" width="150"/>|<img src="https://avatars.githubusercontent.com/u/32586926?v=4" width="150"/>|
|[김선구](https://github.com/haegu97)|[김민경](https://github.com/wynter24)|[신선](https://github.com/sunnwave)|[김정호](https://github.com/cloud0406)|
<br>


