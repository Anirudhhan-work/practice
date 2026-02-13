import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  // const callMe = useCallback(() => {
  //   setCount(5);
  //   console.log("Hello");
  // }, []);

  // const callThat = () => {
  //   setCount(5);
  //   console.log("Hello");
  // };

  // useEffect(() => {
  //   console.log("NOOOO", Math.random());
  // }, [callThat]);

  return (
    <>
      <Nav />
      {/* <Nav />
      <Nav />
      <Nav />
      <Nav /> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default memo(App);
