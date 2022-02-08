import React from 'react';
import HOC from './HOCComponent';

const Comp2 = (props) => {
  return <div>
      <button onClick={props.changehandler}>add 3</button>
      <h3>i am  {props.count} years old and my car is {props.car}</h3>

  </div>;
};

export default HOC(Comp2, 3);
