import styled from "styled-components";

function Nav() {
  const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: beige;
    padding: 5px;
  `;
  const A = styled.a`
    color: black;
    text-decoration: none;

    &:hover {
      font-weight: bold;
    }
    &:visited {
      color: black;
    }
  `;
  return (
    <Nav>
      <A href="#">About</A>
      <A href="#">History</A>
      <A href="#">Information</A>
      <A href="#">SNS</A>
    </Nav>
  );
}

export default Nav;
