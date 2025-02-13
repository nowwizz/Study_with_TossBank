import React, { Component } from "react";
// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.
function Greeting(props) {
  if (props.isMorning === true) {
    return <h3>좋은 아침입니다, {props.name}님!</h3>;
  } else {
    return <h3>좋은 저녁입니다, {props.name}님!</h3>;
  }
}
export function Func1() {
  return (
    <div>
      <Greeting name="유지원" isMorning={true} />
      <Greeting name="박해원" isMorning={false} />
    </div>
  );
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.
class UserCard extends Component {
  //클래스형 컴포넌트 사용
  constructor(props) {
    super(props); //자식 클래스가 부모 클래스의 생성자를 호출 (this 초기화)
    this.state = {
      age: props.age, //this.state에 초기 나이 저장
    };
  }
  addAge = () => {
    this.setState({ age: this.state.age + 1 }); //this.setState()로 age 값 변경
  };
  render() {
    return (
      <div>
        <h3>
          이름: {this.props.name} / 나이: {this.state.age}
        </h3>
        <button onClick={this.addAge}>한 살 더 먹기</button>
      </div>
    );
  }
}

export function Func2() {
  let woman1 = {
    name: "유지원",
    age: 25,
  };
  let woman2 = {
    name: "박해원",
    age: 23,
  };
  return (
    <div>
      <UserCard {...woman1} />
      <UserCard {...woman2} />
    </div>
  );
}

// 문제 3: 객체 리스트 렌더링
// 목표: 객체로 구성된 리스트를 렌더링하고, 추가 정보를 중첩된 형태로 출력합니다.
// 요구사항:
// ItemDetailList라는 컴포넌트를 작성하세요.
// props로 전달받는 각 객체는 이름과 세부 정보를 포함합니다.
// 예시 객체 리스트:
// [
//   { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
//   { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
//   { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] }
// ]
// 각 항목은 <ul> 내부에 렌더링하며, 이름과 세부 정보도 중첩 리스트로 표시합니다.
// 예시 출력:
// - 사과
//   * 빨간색
//   * 달콤함
//   * 비타민 C
function ItemDetailList(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.details.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </ul>
    </div>
  );
}
export function Func3() {
  let A = { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] };
  let B = { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] };
  let C = { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] };

  return (
    <div>
      <ItemDetailList {...A} />
      <ItemDetailList {...B} />
      <ItemDetailList {...C} />
    </div>
  );
}
