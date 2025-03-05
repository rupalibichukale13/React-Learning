import React, { Component } from 'react'

export default class APIIntUsingFetch extends Component {

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
            <h2> Calling API using fetch Method</h2>
           
            <ul>

                {this.state.users.map((user)=>(
                        <li>{user.username} - {user.password}  </li>
                ))}

            </ul>
            
      </>

    )
  }
}
