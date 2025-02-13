import "./App.css";
import Header from "./Header";
import Main from "./Main2";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: RGB(243, 245, 247);
    width: 100%;
    height: 100%;
  }
`;
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
