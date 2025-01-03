import { useState } from "react";

function App() {
  let [count, setCount] = useState(10);
  // let count = 15;

  function addition() {
    if (count === 20) {
      alert("Counter cannot be greater than 20");
      return;
    }
    setCount(count + 1);
  }
  function subtract() {
    if (count === 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCount(count - 1);
  }
  return (
    <>
      <h2>Current counter value : {count} </h2>
      <button onClick={addition}>Add</button>
      <br />
      <button onClick={subtract}>Subtract</button>
    </>
  );
}

export default App;
