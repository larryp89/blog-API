import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blog from "./Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Blog />
    </>
  );
}

export default App;
