//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.
function Greeting(props) {
  return (
    <div>
      {props.names.map((name) => {
        return <h3>환영합니다. {name}님!</h3>;
      })}
    </div>
  );
}
export function Props1() {
  const names = ["김김김", "유유유", "이이이"];
  return <Greeting names={names} />;
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard({ name, age, job }) {
  return (
    <h3>
      이름: {name} / 나이: {age}세 / 직업: {job}
    </h3>
  );
}
export function Props2() {
  const profile1 = {
    name: "유지원",
    age: 25,
    job: "학생",
  };
  const profile2 = {
    name: "박해원",
    age: 23,
    job: "학생",
  };
  return (
    <div>
      <UserCard {...profile1} />
      <UserCard {...profile2} />
    </div>
  );
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
export function Props3() {
  const items1 = ["바나나", "딸기", "사과", "키위"];
  const items2 = ["가위", "풀", "공책", "샤프", "지우개"];
  return (
    <div>
      <ItemList items={items1} />
      <ItemList items={items2} />
    </div>
  );
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function ClickButton(props) {
  return <button onClick={props.ClickFunc}>버튼 누르기</button>;
}
export function Props4() {
  function ClickFunc() {
    alert("버튼이 눌렸습니다!");
  }
  return <ClickButton ClickFunc={ClickFunc} />;
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.
function InfoCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}
export function Props5() {
  return (
    <div>
      <InfoCard title="rolem1">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae atque
          ipsa soluta, minus iusto, libero molestias, voluptate consectetur odit
          laudantium sunt dolorum commodi eum repudiandae eveniet nemo molestiae
          nobis? Illo.
        </p>
        <p>한줄평: 정말 재밌다!</p>
      </InfoCard>
      <InfoCard title="rolem2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          deserunt nemo nesciunt optio. Ipsam laboriosam animi aut laborum eum
          architecto fugit? Iste neque pariatur iusto mollitia atque sint dicta
          quisquam.
        </p>
        <p>한줄평: 흥미롭지 않다.</p>
      </InfoCard>
    </div>
  );
}
