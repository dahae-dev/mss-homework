# MSS Homework

## 과제에 대한 구성 및 선정 이유
과제는 `React`를 기반으로 컴포넌트 기반의 UI를 구성하였으며, `Typescript`를 함께 사용함으로써 견고한 인터페이스를 구축하고자 하였습니다. 컴포넌트 스타일링은 `Styled Components`를 사용하여 theme을 기반으로 일관된 스타일을 지키며, CSS 룰 내부에서 자바스크립트 코드를 사용하여 다이내믹한 스타일을 보다 리액트스럽게 구현하였습니다.
데이터 페칭과 관련하여서는 `React Query` 라이브러리를 사용하여 보다 선언적인 코드 작성을 하고자 하였으며, 리모트 데이터는 React Query의 hooks을 통해, 그 외의 로컬 상태는 리액트 자체의 useState를 사용하여 핸들링하였습니다.
무한 스크롤의 경우, Web APIs의 `IntersectionObserver`와 React Query의 useInfiniteQuery를 조합하여 구현하였으며, 검색에 따른 필터의 경우 `debounce` 개념을 활용하여 검색 키워드 작성이 완료되었을 경우 자동완성이 될 수 있도록 구현하였습니다. 관련 로직들은 계층의 변화 없이 재사용 가능한 로직들로 custom hooks로 별도 구현하여 사용하였습니다.

## 구동 방법
`yarn start` 커맨드를 통해 개발 모드로 앱을 실행시킬 수 있습니다. (http://localhost:3000)