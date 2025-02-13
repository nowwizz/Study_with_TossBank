import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    background-color: beige;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;

  const A = styled.a`
    color: black;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  `;

  return (
    <Footer>
      <A href="#">subscribe</A>
      <A href="#">About Author</A>
      <A href="#">Send us Email</A>
    </Footer>
  );
}

export default Footer;
