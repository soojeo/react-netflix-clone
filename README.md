Netflix-clone Application
=============
Component
-------------
* Banner   
![Banner](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image6.png)
Axios를 활용하여 랜덤으로 영화정보를 받아와 id를 통해 포스터와, 정보, 제목 등을 표기함.
    - Iframe   
    ![Banner](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image5.png)
    HTML inline frame요소, 효과적으로 다른 HTML페이지를 현재 페이지에 포함시키는 중첩된 브라우저로 해당 웹페이지 안에 제한 없이 다른 페이지를 불러와서 삽입할 수 있음.

* Row   
    - document   
    - scrollLeft   
    scrollLeft을 통해 요소의 콘텐츠가 왼쪽 가장자리에서 스크롤 되는 픽셀 수를 가져오거나 설정.   
    - innerWidth   
    브라우즈 안 창 너비   
    - Modal   
    ![Row](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image2.png)

* Footer   
![Footer](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image3.png)

* Search   
![Search](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image4.png)
e.target.value받아와서 setSearchValue로 주소 실시간 반환
useLocation:pathname이랑 search 받아옴, 이걸 활용해서 검색 영화 끌어와야함
useQuery: 주소의 q 이하 key값 받아옴, 검색대상 받아올것   
    - Deboucne   
    사용자가 타자 칠때 지연 시켜주는 기능으로 타이핑 칠때마다 모든 이벤트를 처리할 필요없어 api호출수도 크게 줄어듭니다


function
-------------
* Axios   
axios는 브라우저, node.js를 위한 promise API를 활용하는 http 비동기 통신 라이브러리
백엔드와 프론트엔드의 통신을 쉽게 하기 위한 Ajax와 더불어 사용
netflix앱에서는 the movie DB API 서버의 영화정보를 프론트엔드 리액트로 가져오는 역할
인스턴스화 하는 이유:반복되는 부분을 입력하지않기 위해

* async/await   
비동기식 처리 방식으로
프로미스 상태가 이행될 때까지 기다리다가 이행이 완료되면 그 결과값을 반환하고 다음코드 실행

* Styled Component   
css-in-js에서 css를 처리할 수 있게 해주는 라이브러리
npm install –save styled-components

* React Router Dom   
웹 앱에서 동적 라우팅을 사용할 수 있음. 라우팅이 실행중인 앱 외부 구성에서 처리되는 기존 라우팅 아키텍처와 달리 플랫폼의 요구사항에 따라 라우팅을 용이하게 함
쉽게 말해 화면이 바뀌어도 url이 고정되는 현상을 고쳐주는 것, 뭔가 액션이 취해져도 주소 하나로 할당되는데 이걸 id를 부여해서 페이지를 이동할 수 있게끔
->컴포넌트별로 페이지 부여 ex. localhost:3000/home, localhost:3000/about   
    - BroswerRouter   
    html5 history api를 사용하여 ui를 url과 동기화된 상태를 유지, url에 해당하는 컴포넌트를 연결한 상태를 동기화   
    - Routes   
    앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 역할을 함. 생성된 자식 컴포넌트 중에서 매칭되는 첫번재 Route를 렌더링해줌   
    - Route   
    단일경로를 만드는데 사용   
        - path:원하는 컴포넌트의 URL경로를 지정.   
        - element:경로에 맞게 렌더링되어야 하는 컴포넌트를 지정   
    - Nested Routes   
    레이아웃(어딜가나 있는 틀)에 유용
    - Outlet   
    자식경로 요소를 부모경로 요소에서 렌더링, 중첩된 ui표시
    - useNavigate   
    경로를 바꿔줄수있음 ex. navigate(‘/home’)-> localhost3000/home
    - useLocations   
    이 hooks는 현재 위치 객체를 반환

* SPA(single page application)   
리액트는 SPA때문에 하나의 index.html 템플릿 파일을 가지고 있습니다. 이 하나의 템플릿에 자바스크립트를 이용하여 다른 컴포넌트를 이 index.html템플릿에 넣어 페이지를 변경해주게 됩니다. 이때 이 React Routing Dom 라이브러리가 새 컴포넌트로 라우팅/탐색하고 렌더링하는데 도움을 줍니다.

* 외부링크   
<https://styled-components.com/docs/basics>