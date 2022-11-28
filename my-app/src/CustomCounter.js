import React, { useEffect, useState } from "react";

const useCounter = (operation, key) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    switch (operation) {
      case "+":
        setCount(count + 1);
        break;
      case "-":
        setCount(count - 1);
        break;
      default:
        setCount(0);
    }
  }, [key]);

  return count;
};

export function CustomCounter(props) {
  const [operation, setOperation] = useState("");
  const [key, setKey] = useState(0);

  const handleOperation = (e) => {
    setOperation(e.target.name);
    setKey(key + 1);
  };

  const count = useCounter(operation, key);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleOperation} name="+">
        +
      </button>
      <button onClick={handleOperation} name="-">
        -
      </button>
      <button onClick={handleOperation} name="Reset">
        Reset
      </button>
    </>
  );
}
