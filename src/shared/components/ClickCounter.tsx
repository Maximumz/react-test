import React, { useState, useEffect } from 'react';

// Fix this component so that clicking the button outputs the count in the console log
const ClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, []);

  return (
    <div>
      <p>Click count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ClickCounter;
