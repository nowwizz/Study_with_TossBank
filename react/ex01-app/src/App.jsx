import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main2";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-row flex-wrap font-bold">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
