import React, { useState } from 'react';

// Fix this component so that clicking the button toggles the text between "ON" and "OFF".
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default Toggle;
