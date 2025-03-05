import React from "react";

const ChildCompB = (props) =>{

   
    
    return(
        <>
        <h2>This is our child Component B</h2>
           <p>Person Details: { JSON.stringify(props.personObj) }</p>
           
        </>
    )
}

export default ChildCompB;
