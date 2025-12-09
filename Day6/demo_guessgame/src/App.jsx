import { useState } from "react";
import "./App.css";
import Counter from "./components/Guess";

function App() {
  const [username] = useState("Shar");
  return (
    <>
      <div>
        <Counter username={username} />
      </div>
    </>
  );
}

export default App;
