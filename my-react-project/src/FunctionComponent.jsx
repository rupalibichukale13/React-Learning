import React from "react";
function MyComponent() {
    return(
        <h1>This is Functional Component</h1>
    )
}

export default MyComponent;

//Function Declaration

function Add(a, b){
    console.log(a+b)
}
Add(10,20);    //calling function


//function Expression

const add = function(a,b) {
    console.log(a+b);
}
add(10,20);

//Arrow Function

 // 1. Single Line Arrow function

let add1 = (a,b) => a+b;
console.log(add1(3,2));


// 2.MultiLine Arrow function

const great = (a,b) =>{
    if (a>b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));


