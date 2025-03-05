import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const UseEffectAPICall = () => {

    const[postData, setPostData] = useState([])

    const getPostData = async() =>{
        const postData= await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(postData);
        setPostData(postData.data)
};

    useEffect(
        ()=>{
          console.log('Inside UseEffect  Hook ')
           getPostData(); 
        }, []
    )

    
  return (
    <>
         <h3>Calling API Using  useEffect</h3>
        {/* <h4>useEffect Hook API call</h4> */}

        <div className='container'>
        {/* <h2>Post List using useEfect</h2> */}
        {/* <ul>{ this.state.users.map((user)=>(
            <li> {user.username} - {user.password}</li>
        ))}

        </ul> */}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
            postData.map((data) => (
                <tr key={data.id}>
                    <td> {data.userId} </td>
                    <td> {data.title}</td>
                    <td> {data.body} </td>
                </tr>
                ))}
      </tbody>
    </Table>
    </div>

    </>
  )
}

export default UseEffectAPICall
