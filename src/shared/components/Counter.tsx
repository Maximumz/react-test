import React, { useState } from 'react';

// Fix this component so that clicking the button increments the counter.
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* <button onClick={setCount(count)}>Increment</button> */}
    </div>
  );
};

export default Counter;
