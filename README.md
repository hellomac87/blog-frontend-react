# 리액트를 다루는 기술 튜토리얼

## 블로그 프로젝트 - 프론트엔드

### 프로젝트 구조잡기

#### 프로젝트 생성
백엔드 프로젝트와 같은 디렉토리 내에 create-react-app 을 사용하여 프로젝트 생성
```terminal
$ create-react-app blog-frontend
```

#### 주요 디렉터리 생성
- components : 리덕스 상태에 연결되지 않은 프리젠테이셔널 컴포넌트위치, 각 컴포넌트의 스타일도 이 디렉터리에 위치
- containers : 리덕스 상태와 연결된 컨테이너 컴포넌트 위치
- lib : 백엔드 API 함수들과 코드 스플리팅 할 때 사용하는 asyncRoute 위치
- pages : 라우터에서 사용할 각 페이지 컴포넌트 위치
- store : Ducks 구조를 적용시킨 리덕스 모듈들과 스토어 생성 함수 위치
- styles : 폰트, 색상, 반응형 디자인 도구, 그림자 생성 함수 등 프로젝트에서 전역적으로 필요한 스타일 관련 코드 위치

#### Sass 및 CSS 모듈 적용
Sass와 Css 모듈을 결합하여 컴포너틑 스타일링. 이를 위해 webpack 설정파일 수정 필요

```terminal
$ yarn eject
```
node-sass 와 sass-loader 를 설치하여 sass 적용 css모듈을 편하게 사용하게 하는 classnames 설치
```terminal
$ yarn add node-sass sass-loader classnames
```