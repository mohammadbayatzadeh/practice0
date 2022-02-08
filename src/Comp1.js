import React from "react";
import HOC from "./HOCComponent";
import styled from "styled-components";

function Comp1(props) {
  const MyDiv = styled.div`
   background-color : #52f45f;
   padding : 10px;
   width: 200px;
   display:flex;
   
   `
   const Button  =styled.button`
   margin-right : 5px
   `
  return (
    <MyDiv>
      <Button onClick={props.changename}>change name </Button>
      <h2> my name is {props.name}</h2>
    </MyDiv>
  );
}
export default HOC(Comp1, 2);
