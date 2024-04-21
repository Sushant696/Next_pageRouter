import React, { useState } from "react";

function Couter() {
  const [count, setcount] = useState(0);
  const handleIncrement = () => {
    setcount(count + 1);
  };
  const handleDecrement = () => {
    setcount(count - 1);
  };
  return (
    <div className="h-full w-full flex gap-3 justify-center items-center">
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Couter;
