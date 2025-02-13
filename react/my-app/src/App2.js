import React from "react";
// import Library from "./2-jsx/Library";
import Hello from "./2-jsx/Ex";
import { DrinkMachine, Sum, Greeting } from "./2-jsx/Ex";

function App() {
  return (
    <div>
      <Hello name="유지원" />
      <Sum num1={1000} num2={3000} />
      <DrinkMachine price={1000} />
      <Greeting hour={19} />
    </div>
  );
}

export default App;
