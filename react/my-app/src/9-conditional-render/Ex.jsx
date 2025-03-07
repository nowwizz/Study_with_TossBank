// 연습문제 1: UserProfile 조건부 렌더링
// 사용자 프로필 정보를 표시하는 UserProfile 컴포넌트를 작성하세요.
// 요구사항:
// props.user 객체가 존재하면 사용자 이름과 이메일을 렌더링합니다.
// props.user가 null 또는 undefined이면 "사용자 정보가 없습니다."라는 메시지를 렌더링합니다.
// 힌트: if-else 또는 삼항 연산자를 활용하여 조건부 렌더링을 구현합니다.

function UserProfile(props) {
  return (
    <div>
      {console.log(props.name, props.email)}
      {props.name ? (
        <h2>
          이름: {props.name} / 이메일: {props.email}
        </h2>
      ) : (
        <h3>사용자 정보가 없습니다.</h3>
      )}
    </div>
  );
}

export function Ex1() {
  const user = {
    name: "유지원",
    email: "wi1767@naver.com",
  };
  const ex = null;

  return <UserProfile name={ex} email={ex} />;
}

// 연습문제 2: Notification 컴포넌트 (삼항 연산자 사용)
// 문제:
// Notification 컴포넌트를 작성하여, 알림의 개수에 따라 메시지를 다르게 보여주세요.
// 요구사항:
// props.count가 0이면 "새로운 알림이 없습니다."를 렌더링합니다.
// props.count가 0보다 크면 "새로운 알림이 {count}개 있습니다."를 렌더링합니다.
// 힌트: 삼항 연산자를 사용하여 간결하게 구현할 수 있습니다.
function Notification(props) {
  return (
    <div>
      {props.count ? (
        <h3>새로운 알림이 {props.count}개 있습니다.</h3>
      ) : (
        <h3>새로운 알림이 없습니다.</h3>
      )}
    </div>
  );
}

export function Ex2() {
  return <Notification count={5} />;
}

// 연습문제 3: Advertisement 컴포넌트 (&& 연산자 사용)
// 문제:
// 프리미엄 회원이 아닐 때 광고를 표시하는 Advertisement 컴포넌트를 작성하세요.
// 요구사항:
// props.isPremium이 false일 때만 광고 영역을 렌더링합니다.
// 프리미엄 회원이면 아무것도 렌더링하지 않습니다.
// 힌트: 논리 연산자(&&)를 활용하여 조건이 참일 때만 광고 영역을 표시합니다.

function Ad() {
  return (
    <div style={{ background: "lightpink" }}>
      <h1>광고!</h1>
      <h3>완전 초특가 세일중!</h3>
    </div>
  );
}

function Advertisement(props) {
  return <div>{!props.isPremium && <Ad />}</div>;
}

export function Ex3() {
  const isPremium = false;

  return <Advertisement isPremium={isPremium} />;
}
