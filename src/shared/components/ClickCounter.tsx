import React, { useState, useEffect } from 'react';

// Fix this component so that clicking the button outputs the count in the console log
const ClickCounter = () => {
  const [count, setCount] = useState(0);

  // Add count as a dependency to useEffect to run the effect when count state changes.
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>Click count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ClickCounter;
