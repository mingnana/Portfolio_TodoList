# [TodoList](https://github.com/mingnana/TodoList/tree/gh-pages/index.html)

#### 1. 프로젝트 소개
```md
* react를 학습하기 위해 만든 todolist 입니다.
```

#### 2. 프로젝트 기간
```md
* 2022.08.1 ~ 2022.08.5
```

#### 3. 사용 stack 및 tool
```md
1) Front-end stack 
  - React, react library

2) IDE
  - Visual Studio Code
```

#### 4. 프로젝트 설명
```md
* Prettier & ESLint, Airbnb Style Guide로 코드 컨벤션 설정
* 우측 하단 + 버튼 클릭시 할일 추가 가능하며, 기존 일정 클릭시 수정 및 삭제 가능
* 수정 및 추가에 따른 총 할일 자동 계산
* new Date()함수 사용하여 현재날짜로 출력됨
* styled-components, react-icons 사용하여 아이콘 및 css 적용
```
![image](https://user-images.githubusercontent.com/96216178/183079005-39464357-4d7a-41f4-acaa-38332ec3c3a8.png)
![image](https://user-images.githubusercontent.com/96216178/183079170-f2c430c9-33a5-4f60-9ec2-821a6ac14fa7.png)


#### 5. 프로젝트 Review

```md
 1) eslint prettier 설정 후 Delete `··` prettier/prettier, Insert `············` prettier/prettier, arrow-body-style, consistent-return, @typescript-eslint/no-shadow 등 수많은 에러 발생 -> eslint-disable 적용하였으나 빈화면이 출력돼 수정이 가능한 부분은 바로바로 수정했고, eslintrc에 작성한 규칙이 적용되지 않는 몇몇 에러들은 임시방편으로 eslint-disable-next-line 적용함.
 2) button이 toggle 됐을경우 계속 css가 적용이 돼있거나, 날짜를 기록할수있도록 하는 기능을 연구해보면 더 좋을듯함
```

