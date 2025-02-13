// 연습문제 1: 조건부 렌더링과 키 사용
// 아래의 tasks 배열을 활용하여, 완료된 작업과 완료되지 않은 작업을 분리하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 완료된 작업은 <h3>완료된 작업</h3> 아래에 리스트로 렌더링합니다.
// 2. 완료되지 않은 작업은 <h3>할 일 목록</h3> 아래에 렌더링합니다.
// 3. filter()함수를 사용하여, tasks 배열을 2개 생성후 사용한다.

import React, { useEffect, useState } from "react";

export function TaskList() {
  const tasks = [
    { id: 1, text: "React 공부하기", completed: true },
    { id: 2, text: "운동하기", completed: false },
    { id: 3, text: "저녁 먹기", completed: false },
    { id: 4, text: "독서하기", completed: true },
  ];
  const tasks1 = tasks.filter((task) => task.completed === true);
  const tasks2 = tasks.filter((task) => task.completed === false);
  return (
    <div>
      <h3>완료된 작업</h3>
      <ol>
        {tasks1.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ol>
      <h3>할 일 목록</h3>
      <ol>
        {tasks2.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ol>
    </div>
  );
}
//연습문제 2: 리스트 정렬과 키
// 아래의 products 배열을 가격 순으로 정렬하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 최저가부터 최고가 순으로 정렬하여 <ul>로 렌더링합니다.
// 2. 각 제품은 상품명 - 가격 형태로 표시합니다.
// 3. sort()함수를 사용합니다.

export function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Tablet", price: 800 },
  ];
  products.sort((a, b) => a.price - b.price);
  return (
    <div>
      <h3>낮은 가격 순으로 정렬</h3>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}: {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
//연습문제 3: 입력 폼과 리스트 추가
// 사용자가 입력한 새로운 항목을 리스트에 추가하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 초기 리스트는 빈 배열입니다.
// 2. 사용자가 입력하고 버튼을 누르면 입력한 항목이 리스트에 추가됩니다.
// 3. 각 리스트 항목은 고유한 키를 가져야 합니다.
export function DynamicList() {
  const [arr, setArr] = useState([]);
  const [newItem, setNewItem] = useState("");
  function handleAddItem() {
    const item = { id: arr.length + 1, item: newItem };
    setArr([...arr, item]);
  }
  return (
    <div>
      <h3>동적 리스트</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="항목 입력"
      />
      <button onClick={handleAddItem}>추가하기</button>
      <h3>목록 리스트</h3>
      <ul>
        {arr.map((ar) => {
          return <li key={ar.id}>{ar.item}</li>;
        })}
      </ul>
    </div>
  );
}
// 연습문제4: jsonplaceholder사이트의 JSON응답을 리스트로 출력하시오.
//URL : https://jsonplaceholder.typicode.com/posts
// 요구사항
// 1. React로 jsonplaceholder.typicode.com/posts API를 호출하여
//    id, title, body를 출력하는 간단한 리스트를 구성하세요.
// 2. useEffect와 fetch: API 호출을 처리합니다.
// 3. useState: 데이터를 저장합니다.
// 4. 데이터 로딩 중 상태와 오류 처리도 간단히 포함합니다.
// export function RSList() {
//   const [post, setPost] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         if (!response.ok) throw new Error("에러 발생");
//         const data = await response.json();
//         setPost(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p>로딩 중...</p>;
//   if (error) return <p>오류 발생: {error}</p>;

//   return (
//     <div>
//       <h2>게시글 리스트</h2>
//       <ul>
//         {post.map((ps) => {
//           return (
//             <li key={ps.id}>
//               <h3>{ps.title}</h3>
//               <p>{ps.body}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

//연습문제5
//연습문제4에서 가져온 posts에다가
// 입력 폼을 통해 새로운 post를 동적으로 추가하고 초기에는 10개의 post만 보여주는 리액트 컴포넌트를 작성했습니다.
// 요구사항
// 1. 처음에는 API로 가져온 10개의 post만 보여줍니다.
// 2. 사용자가 입력 폼에 id, User ID, Title, Body를 입력하고 제출하면 새로운 post가 동적으로 추가됩니다.
export function RSList2() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("에러 발생");
        const data = await response.json();
        setPost(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Number(formData.id),
      userId: Number(formData.userId),
      title: formData.title,
      body: formData.body,
    };
    setPost([newPost, ...post]);
    setFormData({ id: "", userId: "", title: "", body: "" });
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="body"
          placeholder="Body"
          value={formData.body}
          onChange={handleChange}
          required
        />
        <button type="submit">추가</button>
      </form>
      <h2>게시글 리스트</h2>
      <ul>
        {post.map((ps) => {
          return (
            <li key={ps.id}>
              <p>{ps.id}</p>
              <h3>{ps.title}</h3>
              <p>userID: {ps.userId}</p>
              <p>{ps.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
