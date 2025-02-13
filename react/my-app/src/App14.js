// App13.js
import React from "react";
import ThemeContextProvider from "./14-context/ThemeContextProvider";

function App() {
  return (
    <div>
      <ThemeContextProvider initTheme="dark" />
    </div>
  );
}

export default App;
