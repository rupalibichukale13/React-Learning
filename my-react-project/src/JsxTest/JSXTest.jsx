import React from "react";

function JSXTest(){
    const name = "React Js"
    const num = 10;
    return(
        <div>
            <h1>Welcome To {name} {num===10 ? 'number is 10' : 'number is not 10'}</h1>
        </div>
    )
}
export default JSXTest;