Netflix-clone Application
=============
Component
-------------
* Banner
![Banner](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image6.png)
Axios를 활용하여 랜덤으로 영화정보를 받아와 id를 통해 포스터와, 정보, 제목 등을 표기함.
    * Iframe
    ![Iframe](https://github.com/soojeo/react-netflix-clone/blob/master/netflix/images/image5.)png
    HTML inline frame요소, 효과적으로 다른 HTML페이지를 현재 페이지에 포함시키는 중첩된 브라우저로 해당 웹페이지 안에 제한 없이 다른 페이지를 불러와서 삽입할 수 있음.


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
* 외부링크: <https://styled-components.com/docs/basics>