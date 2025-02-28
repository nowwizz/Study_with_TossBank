//ex09.ts
//타입 좁히기

function func1(value: number | string) {
  //value.toFixed() //number타입에서 실수형으로
  // value.toUpperCase() //대문자로 바꾸기 (string 타입에서 사용)
  if (typeof value === 'number') {
    value.toFixed()
  } else if (typeof value === 'string') {
    value.toUpperCase()
  }
}
