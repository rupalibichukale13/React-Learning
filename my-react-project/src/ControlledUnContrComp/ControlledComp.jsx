import React, { useState } from 'react'

const ControlledComp = () => {
    const [userName, setUserName] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`UserName: ${userName} Password: ${password}`)
    }
  return (
    <>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>

        <div className='row'>

            <div className='five columns'>
            <label>User Name</label>
            <input type= 'text' placeholder='Enter User Name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
        </div>
<br></br>
        <div className='row'>

            <div className='five columns' style={{marginTop:'20px'}}>
            <label>Password</label>
            <input type= 'password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
        </div>
        <br></br>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default ControlledComp
