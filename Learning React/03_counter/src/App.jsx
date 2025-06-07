import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) return;
    counter++;
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    counter--;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br /> <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
