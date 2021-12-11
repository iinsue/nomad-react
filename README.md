**JSX에서 중괄호는 자바스크립트 쓸 때 사용한다!**
***
**Component는 단지 JSX를 부르는 Function일 뿐이다!**
***
**React는 절대 State를 직접적으로 수정하지 않기 때문에 항상 수정하는 함수를 사용해야 한다.**

## Chapter1 MODULE.CSS  
  - CRA의 고유 기능으로, className을 활용하여
    전역이 아닌 컴포넌트에 한정해서 스타일을 정해줄 수 있다.
    내 HTML내에서는 랜덤방식으로 class name 이 설정된다.
    따라서 동일한 클래스 이름을 사용하더라도 상관없다.


## Chapter2 useEffect
  - 두 개의 argument를 가지는 함수
  - 첫 번째 argument는 실행하고 싶은 코드
  > ex) useEffect(callback, []) *한번만 실행*
  - 두 번째 argument는 값이 변화할때만 호출하고 싶은 것들
  > ex) useEffect(callback, [keyword, ....])
  > 정리: *useEffect(실행시키고 싶은 코드, [dependencies])*
  > dependencies: react.js 가 지켜보아야 하는 것들

  - 리렌더링이 필요없을 때
  - 리렌더링 되어도 괜찮은 코드도 있지만,
    컴포넌트가 처음 render 될 때만 렌더링이 필요한 코드도 있다.
    ex) API로 외부 데이터를 가져올 때 컴포넌트 처음 렌더링되는 그 순간에만
        API 요청을 하고 이후에 state가 변화할 때는 그 API에서 똑같은 정보를
        가져올 필요가 없다.
  - +a) Cleanup function: component가 destroy될 때 뭔가 할 수 있도록 해주는 것.
 