import React, { useCallback, useMemo, useState, useRef } from "react";
// Ex.jsx
//연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)
// 목표:
// 사용자가 입력하는 숫자들을 배열에 추가하고, 배열의 평균값을 **useMemo**로
//   최적화하여 불필요한 재계산을 방지하세요.
// 힌트:
// 배열에 새로운 숫자가 추가될 때만 평균값을 재계산해야 합니다.
// 평균값을 구하려면 배열의 합을 배열의 길이로 나누면 됩니다.
export function Count1() {
  const [number, setNumber] = useState([]);

  const avg = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
    return sum / number.length;
  }, [number]);

  return (
    <div>
      <h1>1번 문제</h1>
      <h2>배열: {JSON.stringify(number)}</h2>
      <h2>배열 평균: {avg}</h2>
      <input
        type="number"
        onChange={(e) => setNumber([...number, parseInt(e.target.value)])}
      />
    </div>
  );
}

// 연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)
// 목표:
// 1. 숫자를 상태로 관리하고, 버튼을 클릭할 때마다 숫자가 1씩 증가합니다.
// 2. useCallback을 사용하여 버튼 클릭 핸들러가 컴포넌트가 리렌더링될 때마다 새로 생성되지 않도록 최적화하세요.
export function Count2() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = useCallback(
    (e) => {
      setNumber(number + 1);
    },
    [number]
  );

  return (
    <div>
      <h1>숫자: {number}</h1>
      <button onClick={handleNumberChange}>증가</button>
    </div>
  );
}

// 연습문제 3: 입력창 초기화하기 (useRef)
// 목표:
// 사용자가 입력한 텍스트를 버튼 클릭 시 초기화하고, 입력창에 포커스를 다시 설정합니다.
// **useRef**를 사용하여 입력창을 제어하세요.
// 힌트:
// 입력창에 접근하기 위해 **useRef**로 참조를 생성하세요.
// **inputRef.current.value**를 이용해 입력 값을 초기화하고, **inputRef.current.focus()**로 포커스를 설정합니다.
export function Count3() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ` `;
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="여기에 입력하세요." />

      <br />
      <button onClick={handleClick}>리셋 및 입력창 포커스</button>
    </div>
  );
}

//useEffect: 의존성 배열이 바뀌면 업데이트. 코드가 수행
//useMemo: 의존성 배열이 바뀌면 업데이트된 값을 반환
//useCallback: 의존성 배열이 바뀌면 업데이트된 함수를 반환
