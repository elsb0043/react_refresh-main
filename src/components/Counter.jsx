import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?
// count = count + 1, skulle laves om til setCount(count + 1)

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
