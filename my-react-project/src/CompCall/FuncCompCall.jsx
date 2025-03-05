import React from "react";

const FuncCompCall = (props) =>{

   
    
    return(
        <>
        
            <h3>Welcome to FuncCompCall {props.myName}</h3>
            <h3>Welcome to FuncCompCall company Name { props.companyName}</h3>
           <p>Prson Details: { JSON.stringify(props.personObj) }</p>
           
        </>
    )
}

export default FuncCompCall;
