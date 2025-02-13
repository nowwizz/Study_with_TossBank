import styled from "styled-components";

function Header() {
  const Header = styled.header`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Header>
      <h1>골든리트리버 - Golden Retriever</h1>
    </Header>
  );
}

export default Header;
