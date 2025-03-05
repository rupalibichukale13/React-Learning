import React from "react";


class ClassCompCall extends React.Component{

    render(){
        console.log(this.props);
        
        const { myName, companyName , personObj}  = this.props; // Using ES6 feature of Destructuring
         console.log(personObj);

        return(
            <>
                <h3>Welcome to ClassCompCall { myName}</h3>
                <h3>Welcome to ClassCompCall company Name { companyName}</h3>
                <p>Prson Details: { JSON.stringify(personObj) }</p>


                {/* <h3>This is  Child Component A</h3> */}
                 {/* <h3>This is  Child Component B</h3>
                <p>Prson Details: { JSON.stringify(personObj) }</p> */}
            </>
        )

    }
}

export default ClassCompCall;