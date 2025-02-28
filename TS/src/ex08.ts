//ex08.ts

import { log } from 'console'

//타입 단언(Assertion): 형변환과 유사

type Person = {
  name: string
  age: number
}

let person = {} as Person //형 단언(확정) or 변환
person.name
person.age

type Dog = {
  name: string
  color: string
}
let dog = {
  name: '멍멍이', //남음
  color: '흰색', //남음
  town: '서울', //사라짐
} as Dog

//const 선언 (읽기 전용)
let cat = {
  name: '야옹이',
  color: 'brown',
} as const
cat.name = '길야옹이' //읽기 전용 속성이라 에러

type Post = {
  title: string
  content?: string //없을수도 있음
}
let post: Post = {
  title: '글내용',
}

//? : 옵셔널(null일수도) undefined
//! : Not null 단언 - 개발자가 null이 아님을 확신하고 쓰는 것
const len1: number = post.content.length //값이 존재하지 않으니 null
console.log(len1) //에러
const len2: number = post.content?.length //undefined
console.log(len2) //에러
const len3: number = post.content!.length
console.log(len3)
