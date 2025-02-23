import React, { useState } from 'react';

// Fix this component so that it updates the input value properly.
const FormInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default FormInput;
