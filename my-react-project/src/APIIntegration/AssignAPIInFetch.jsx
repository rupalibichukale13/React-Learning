import React, { Component } from "react";
// import { Container } from 'react-bootstrap/Container';
// import "./AssignAPIIntFetch.css"

export default class AssignAPIIntFetch extends Component {
    constructor(props){
        super(props)

        this.state={
            users :[]
        }

    }

componentDidMount(){
    console.log('Inside component did mount');
    this.fetchUserDetails();
}

fetchUserDetails = async() =>{
    console.log('Inside FetchUser details')
    const userData = await fetch('https://fakestoreapi.com/users');
    const data = await userData.json();
    console.log(data);
    this.setState({users : data})
}

  render() {
    return (
     
      <>
            <h2 id="heading"> Calling API using fetch Method</h2>
<div class="table-responsive container-fluid" id="tableContainer">
            <table class="table  table-striped  table-sm table-bordered " >
                <thead>
                <tr class="table-warning">
                    <th>ID</th>
                    <th>EMAIL ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
                
                </thead>

                <tbody>
                {this.state.users.map((user)=>(
                    <tr>
                        <td>{ user.id }</td>
                        <td>{ user.email }</td>
                         <td>{ user.username }</td>
                        <td> {user.password} </td>
                     </tr>
                       
                ))}

                </tbody>
            </table>
            </div>
      </>

    )
  }

}