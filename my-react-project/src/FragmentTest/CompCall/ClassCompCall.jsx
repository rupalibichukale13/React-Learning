import React from "react";


class ClassCompCall extends React.Component{

    render(){
        console.log(this.props);
        
        // const { companyName, personObj} = this.props; //es6 feature of Destructuring/
        const {  personObj} = this.props;
        console.log(personObj);

        return(
            <>
                {/* <h3>Welcome to ClassCompCall {myName}</h3> */}
                {/* <h3>Welcome to ClassCompCall Company Name {companyName}</h3> */}
                <h3>This is  Child Component A</h3>
                <p>Prson Details: { JSON.stringify(personObj) }</p>
                <h3>This is  Child Component B</h3>
                <p>Prson Details: { JSON.stringify(personObj) }</p>
            </>
        )

    }
}

export default ClassCompCall;