import styled from "styled-components";
import Aside from "./Aside";
import Section from "./Section";

function Main2() {
  const Main = styled.main`
    display: flex;
    padding: 10px;
    gap: 20px;
  `;

  return (
    <Main>
      <Aside />
      <Section />
    </Main>
  );
}

export default Main2;
