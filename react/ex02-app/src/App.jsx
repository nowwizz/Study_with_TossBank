import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main2";
import Footer from "./Footer";
function App() {
  const Div = styled.div`
    background-color: bisque;
    color: black;
  `;

  return (
    <Div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Div>
  );
}

export default App;
