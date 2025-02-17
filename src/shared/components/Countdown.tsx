import React, { useState, useEffect } from 'react';

// Fix this component so the countdown timer clears correctly when unmounted.
const Countdown = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    // Fix this: The interval is not being cleared.
    // const interval = setInterval(() => {
    //   setTime(time - 1);
    // }, 1000);
    //return () => clearInterval();
  }, []);

  return <p>Time left: {time}</p>;
};

export default Countdown;
