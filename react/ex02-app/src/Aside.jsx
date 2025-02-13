import styled from "styled-components";

function Aside() {
  const Aside = styled.aside`
    border: 2px solid white;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
  `;
  const Img = styled.img`
    width: 300px;
  `;

  return (
    <Aside>
      <b>Golden Retriever</b>
      <Img src="/dog.jpg" alt="리트리버" />
      <ul>
        <li> 기본특성</li>
        <li> 단점</li>
        <li> 키울 시 주의점</li>
        <li> 파생 혼종견</li>
      </ul>
    </Aside>
  );
}

export default Aside;
