import React, { useState } from "react";

const HOC = (OldComponent , step) => {
  const NewComponent = (props) => {
      const[count , setCount] = useState(0);

      const changehandler =()=>{
        setCount( count + step)
    }
    return (
      <div>
        <OldComponent changehandler={changehandler} count={count} {...props} />
      </div>
    );
  };
  return NewComponent;
};

export default HOC;
