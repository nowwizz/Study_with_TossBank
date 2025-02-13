import Nav from "./Nav";
import styled from "styled-components";

function Header() {
  const Header = styled.header`
    border-bottom: 3px solid RGB(221, 221, 221);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    padding-left: 30px;
    padding-right: 30px;
    background-color: white;
    box-shadow: 0px 3px 10px rgba(216, 216, 216, 0.392);
    & h2 {
      margin-left: 10px;
      color: RGB(56, 93, 212);
      font-weight: bold;
    }
  `;
  return (
    <Header>
      <h2>TechStore</h2>
      <Nav />
    </Header>
  );
}

export default Header;
