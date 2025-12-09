import React, { useState } from "react";

function Counter({ username }) {
  const [count, setCount] = useState(0); //state , useState HOOK

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="bg-white-200 p-20 rounded-lg text-center">
        
      <h1>Counter App</h1>
      <h2>Welcome, {username}!</h2>
      <h3>{count}</h3>
      <button onClick={increment} style={{ backgroundColor: "green", color: "white", padding: "10px" }}>Increment</button>
      <button onClick={decrement} style={{ backgroundColor: "red", color: "white", padding: "10px" }}>Decrement</button>
    </div>
  );
  
}

export default Counter;