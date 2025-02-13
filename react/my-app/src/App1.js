//import "./App.css";
//E1: default E2: 부가적인 export
import { Helo } from "./1-element/Ex";

function App() {
  //이 방식은 JSX로 렌더링하지 않고 React 컴포넌트 자체 또는 JSX 요소로 작성된 변수 반환
  // return E.E6;

  //이 방식은 React의 함수형(클래스형) 컴퍼넌트를 JSX 문법으로 호출하여 반환하는 경우
  // return <E.Hello name="홍길동" />;

  const products = [
    { id: 1, name: "노트북", price: 8000 },
    { id: 2, name: "스마트폰", price: 4000 },
    { id: 3, name: "태블릿", price: 6000 },
  ];

  return (
    <div>
      {products.map((product) => (
        <Helo id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default App;
