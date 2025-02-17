import React, { useState } from 'react';

// Fix this component so that it updates the input value properly.
const FormInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input type='text' value={inputValue} onChange={(e) => setInputValue} />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default FormInput;
