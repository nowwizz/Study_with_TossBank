//ex04.ts

//타입 별칭(Type Alias)
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  location: string
  phone: string
}

let user1: User = {
  id: 1,
  name: '홍길동',
  nickname: 'hong',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-1111-2222',
}

let user2: User = {
  id: 2,
  name: '사임당',
  nickname: 'dang',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-1111-2222',
}

//객체 리터럴
type CountryCodes = {
  Koread: string
  UnitedState: string
  UnitedKingdom: string
}
let countryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingom: 'uk',
}
//200개 라면?

//인덱스 시그니처
type CountryCodes2 = {
  [key: string]: string
}
let countryCodes2: CountryCodes2 = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  Japan: 123, //에러
}
type CountryCodes3 = {
  [key: string]: string
  Korea: 'ko' //Korea는 꼭 있어야 됨
}
let countryCodes3: CountryCodes3 = {
  Korea: 'ko', //꼭 있어야 함. 없으면 에러
}
