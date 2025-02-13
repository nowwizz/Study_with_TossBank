import React, { useEffect, useState } from "react";
/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */
function Func1_1({ num, setNum }) {
  return (
    <input
      type="number"
      value={num}
      onChange={(e) => setNum(Number(e.target.value))}
    />
  );
}
function Func1_2({ num, setNum }) {
  return (
    <input
      type="number"
      value={num}
      onChange={(e) => setNum(Number(e.target.value))}
    />
  );
}

export function Func1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(num1 + num2);
  }, [num1, num2]);

  return (
    <div>
      <b>숫자 1 입력</b>
      <Func1_1 num={num1} setNum={setNum1} />
      <br />
      <b>숫자 2 입력</b>
      <Func1_2 num={num2} setNum={setNum2} />
      <h3>
        {num1} + {num2} = {sum}
      </h3>
    </div>
  );
}
/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */

function Func2_1({ arr, setArr }) {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];
  const handleClick = (item) => {
    setArr([...arr, item]);
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(item)}
              style={{
                cursor: "pointer",
                backgroundColor: arr.includes(item)
                  ? "lightblue"
                  : "transparent",
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Func2() {
  const [arr, setArr] = useState([]);
  return (
    <div>
      <h3>리스트 선택 및 연동</h3>
      <Func2_1 arr={arr} setArr={setArr} />
      <h3>선택된 항목</h3>
      <ul>
        {arr.map((ar, index) => {
          return <li key={index}>{ar}</li>;
        })}
      </ul>
    </div>
  );
}
