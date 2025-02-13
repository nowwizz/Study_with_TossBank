//Ex.jsx
import React, { useState } from "react";
// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트
export function Func1() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        //이벤트함수 매개변수로 event객체로 받을 수 있다.
        // t: 이벤트 객체 - 이벤트에 대한 정보를 담고 있다.
        // t.target: 이벤트가 발생한 객체(input객체)
        onChange={(t) => {
          setText(t.target.value);
        }}
      />
      사용자입력: {text}
    </div>
  );
}
// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.
export function Func2() {
  const [color, setColor] = useState(0);
  const arr = ["red", "green", "blue"];
  return (
    <div>
      <button
        onClick={() => {
          if (color > 1) {
            setColor(0);
          } else {
            setColor(color + 1);
          }
        }}
        style={{ backgroundColor: arr[color] }}
      >
        버튼
      </button>
    </div>
  );
}
//강사님 2번 풀이
export function ColorChanger() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "green", "blue"];

  return (
    <div
      style={{
        backgroundColor: colors[colorIndex],
        height: "100px",
        padding: "20px",
      }}
    >
      <p>현재 색상: {colors[colorIndex]}</p>
      <button onClick={() => setColorIndex((colorIndex + 1) % colors.length)}>
        색상 변경
      </button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용
export function Func3() {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check);
        }}
      />
      <p>{check ? "ON" : "OFF"}</p>
    </div>
  );
}
// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.
export function Func4() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          if (num < 10) {
            setNum(num + 1);
          }
        }}
      >
        버튼
      </button>
      <p>숫자: {num}</p>
    </div>
  );
}
// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]
export function Func5() {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="항목을 추가하세요"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setItem([...item, text]);
        }}
      >
        항목 추가
      </button>
      <ul>
        {item.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
}

//강사님 5번 풀이
export function ItemList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // 입력 필드 초기화
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="항목을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>항목 추가</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
