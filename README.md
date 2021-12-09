    ##Chapter1 MODULE.CSS
    
- CRA의 고유 기능으로, className을 활용하여
  전역이 아닌 컴포넌트에 한정해서 스타일을 정해줄 수 있다.
  내 HTML내에서는 랜덤방식으로 class name 이 설정된다.
  따라서 동일한 클래스 이름을 사용하더라도 상관없다.


    ##Chapter2 useEffect
  
- useEffect
  - 두 개의 argument를 가지는 함수
  - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
    ex) useEffect(callback, [])

- 리렌더링이 필요없을 때
  - 리렌더링 되어도 괜찮은 코드도 있지만,
    컴포넌트가 처음 render 될 때만 렌더링이 필요한 코드도 있다.
    ex) API로 외부 데이터를 가져올 때 컴포넌트 처음 렌더링되는 그 순간에만
      API 요청을 하고 이후에 state가 변화할 때는 그 API에서 똑같은 정보를
      가져올 필요가 없다.