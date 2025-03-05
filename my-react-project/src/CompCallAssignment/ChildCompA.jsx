import React from "react";



class ChildCompA extends React.Component{

    render(){
        console.log(this.props);
        
        const {  personObj}  = this.props; // Using ES6 feature of Destructuring
         console.log(personObj);

        return(
            <>
                <h3>This is our Child Component A</h3> 
                <p>Person Details: { JSON.stringify(personObj) }</p>
            </>
        )

    }
}

export default ChildCompA;