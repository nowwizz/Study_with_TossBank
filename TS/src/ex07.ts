//ex07.ts

//합집합 타입 - Union
let a: string | number | boolean
a = 123
a = 'hong'
a = true

let arr: (string | number | boolean)[] = [123, 'hong', true]

//객체 타입
type Dog = {
  name: string
  color: string
}
type Person = {
  name: string
  lang: string
}
type Union1 = Dog | Person
let union1: Union1 = {
  name: '',
  color: '',
}
let union2: Union1 = {
  name: '',
  lang: '',
}
let union3: Union1 = {
  name: '',
  color: '',
  lang: '',
}
//위의 3가지를 제외한 조합은 에러
let union4: Union1 = {
  name: '',
}

//교집합 - Intersection

//never 타입으로 추정된다.
let neverVar: string & number

type Intersection = Dog & Person

let inter1: Intersection = {
  name: '',
  color: '',
  lang: '',
}

//객체 타입의 호환성
let dog: Dog
let person: Person

dog = inter1 //타입 호환됨
//2 <- 3 : 3개 중에 2개 값만 들어감
person = inter1 //타입 호환됨

inter1 = dog //타입 호환 안됨
//3 <- 2 : 2개에서 3개로는 안됨
inter1 = person //타입 호환 안됨
