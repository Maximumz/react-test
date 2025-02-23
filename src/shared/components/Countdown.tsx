import React, { useState, useEffect } from 'react';

// Fix this component so the countdown timer clears correctly when unmounted.
const Countdown = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    // Fix this: The interval is not being cleared.
    const interval = setInterval(() => {
      setTime((previousTime) => {
        if (previousTime > 0) {
          return previousTime - 1;
        } else {
          clearInterval(interval); // clear interval when time reaches 0.
          return 0;
        }
      });
    }, 1000);

    // Clean up the interval when component unmount.
    return () => clearInterval(interval);
  }, []);

  return <p>Time left: {time}</p>;
};

export default Countdown;
