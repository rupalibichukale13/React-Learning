import React, {Component} from 'react';
class StateInClassComp extends Component {

    constructor(props){
        super(props)

        this.User = "Guest";

        this.state= {
            UserName: "Guest"
        }

        this.state = {
            number : 0,
            flag: true,
            arrayvalue: [1,2,5,9,10,15,20,25],

            person:{
                name: "Rupali",
                age:   21
            }

        } 

 }

    changeUser(){
        console.log(`Inside change user function`);
        this.User = "Admin"
        console.log(this.User);
    }

    changeUserName(){
        console.log(`Inside new chnage userName function`);
        this.setState({userName: "Admin"})
        console.log(this.state.UserName);
    }
    

    render(){
        return(
            <>
            <h1> State in Class Component</h1>
            <h3>Current user using normal variable: {this.user}</h3>
            < button onClick={this.changeUser.bind(this)}>Login as Admin</button>
            
            <h3> Current User using state: {this.state.userName}</h3>
            < button onClick={this.changeUserName.bind(this)}>Login as Admin</button>

           <p>Number is: {this.state.number}</p>
           <p>Boolean is: {this.state.flag ? "True" : "false"}</p>
           <p>Array Value : {this.state.arrayvalue.join(',')}</p>
           <p>Person Obj: {JSON.stringify(this.state.person)}</p>


           {/* <h3>Current User:{this.User}</h3> 
            <h3>Current user:{this.state.UserName}</h3>
             < button onClick={this.changeUser.bind(this)}>Login as Admin</button> */}
            
            </>
        )
    }
}
export default StateInClassComp;
 