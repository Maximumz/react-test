import React from 'react';

// Fix this component so that the child component properly receives and displays the message prop.
const Parent = () => {
  return <Child message='Hello, Child!' />;
};

const Child = (props) => {
  return <p>{props.text}</p>;
};

export default Parent;
