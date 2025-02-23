import React from 'react';

// Fix this component so that the child component properly receives and displays the message prop.
const Parent = () => {
  return <Child message='Hello, Child!' />;
};

const Child = (props) => {
  // access the message prop.
  return <p>{props.message}</p>;
};

export default Parent;
