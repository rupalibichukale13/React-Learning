import React from 'react'

const ConditionalRendering = () => {

    const isLoggedIn = false;

        // 1] Conditional Rendering Using If else
        // if(isLoggedIn){
        // return <h1>welcome to Conditional Rendering</h1>
        // } else{
        // return <h1> welcome as Guest!! </h1>
        // }

        // 2] Conditional Rendering using variable
        // let result;
        // if(isLoggedIn){
        // result = <h1>Welcome to Conditional Rendering </h1>
        // } else {
        // result = <h1> Welcome as Guest! </h1>
        // }
        // return result;

        // 3] Conditional Rendering using ternary operator
        // return isLoggedIn ? <h1>Welcome to Conditional Rendering</h1>: <h1> Welcome as Guest </h1>;

        // 4] Conditional Rendering using short cercuit
        return isLoggedIn && <h1> Welcome to Conditional Rendering</h1>;





}
export default ConditionalRendering;