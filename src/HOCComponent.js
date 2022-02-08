import React, { useState } from "react";

const HOC = (OldComponent, step) => {
  const NewComponent = (props) => {
      const nameArray = ["mohammad", "farhad", "masih"];
      const [i, setI] = useState(0);
    const [count, setCount] = useState(0);
    const [name, setName] = useState(nameArray[i]);

    const changehandler = () => {
      setCount(count + step);
    };

    const changename = ()=>{
        setI(prevnumber =>prevnumber + 1);
        setName(nameArray[i])
        console.log(i);
        if(i>1){
            setI(0)
        }
    }

    return (
      <div>
        <OldComponent
          changehandler={changehandler}
          changename={changename}
          count={count}
          name={name}
          {...props}
        />
      </div>
    );
  };
  return NewComponent;
};

export default HOC;
