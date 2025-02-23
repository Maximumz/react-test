import React, { useState } from 'react';

// Fix this component so that clicking the button increments the counter.
const Counter = () => {
  const [count, setCount] = useState(0);

  // Setup a onClick handler to update the counter.
  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
