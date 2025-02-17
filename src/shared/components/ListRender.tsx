import React from 'react';

// Fix this component so that it properly renders the list without React key warnings.
const ListRender = () => {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ListRender;
