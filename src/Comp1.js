import React from "react";
import HOC from "./HOCComponent";
 function Comp1(props) {
  return(
    <div>
        <button onClick={props.changehandler}>add some </button>
        <h2> the number is {props.count}</h2>
    </div>
  );
}
export default HOC(Comp1 , 2) ;

