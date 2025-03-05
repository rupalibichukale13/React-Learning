import React from "react";
import ClassCompCall from "./ClassCompCall";
import FuncCompCall from "./FuncCompCall";

const WelcomeCompCall = () =>{
        const name = 'Rupali';

        let person = {
            name : "Rupali Bichukale",
            age: '21',
            address : 'Sangola',
            course : 'B.Tech'
        };

    return(
        <>
            <h1> Welcome to WelcomeCompCall</h1>
            {/* <h1>Welcome to Parent Component Rupali</h1> */}

            <ClassCompCall myName = {name} companyName="Infosys" personObj = {person} />                

            <FuncCompCall myName = {name} companyName="Wipro" personObj = {person}/>
        </>
    )
}

export default WelcomeCompCall;