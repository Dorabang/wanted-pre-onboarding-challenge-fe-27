### 원티드 프리온보딩 FE 챌린지 11월
---
안녕하세요, 프론트엔드 개발자 박수아입니다.
본 레포지토리는 원티드 프리온보딩 사전과제 제출을 위해 만들어졌습니다.

### 기술 스택
---
|기술|스택|
|--|--|
|언어|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>, <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>|
|라이브러리|<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>|
|HTTP 클라이언트|<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>|
|서버 상태 관리|<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>|
|css|<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>|
|빌드|<img src="https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>|

### 프로젝트 실행
#### 설치 및 실행 방법

- 아래 명령어를 통해 레포지토리를 클론합니다.

```
git clone https://github.com/Dorabang/wanted-pre-onboarding-challenge-fe-27.git
```

- 클론 받은 프로젝트 디렉토리로 이동 후, 필요한 패키지를 설치합니다.

```
cd wanted-pre-onboarding-challenge-fe-27
npm i
```

- 개발 서버를 실행합니다. 브라우저에서 로컬(http://localhost:5173)로 접속 시 해당 서비스를 확인할 수 있습니다.

```
npm run dev
```


#### API 서버 연결
- 사전 과제에서 제공된 [API 서버](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) readme.md를 참고하여 설치 후, 로컬(http://localhost:8080)에서 실행되고 있는지 확인하세요.

### 주요 기능
> 회원가입
- 이메일과 비밀번호의 유효성을 확인합니다.

> 로그인
- home은 로그인 이후에 사용 가능합니다.
- 이메일과 비밀번호의 유효성을 확인합니다.
  
> 할 일
- Todo 목록을 볼 수 있습니다.
- Todo 추가 버튼(+)을 클릭하면 할 일을 추가할 수 있습니다.
- Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
- Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 할 일은 목록과 상세 영역으로 나누어 확인할 수 있습니다.
- 새로고침 시에도 현재 상세 영역을 확인할 수 있습니다.
- 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통해 조회할 수 있습니다.
