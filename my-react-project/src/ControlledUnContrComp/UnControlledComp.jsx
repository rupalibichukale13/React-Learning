import React from 'react'

const UnControlledComp = () => {

    const userNameRef = React.createRef();
    const passwordRef = React.createRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`UserName: ${userNameRef.current.value} Password: ${passwordRef.current.value}`)
    }
  return (
    <>
     <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>

        <div className='row'>

            <div className='five columns'>
            <label>User Name</label>
            <input type= 'text' placeholder='Enter User Name' ref={userNameRef}  />
            </div>
        </div>
<br></br>
        <div className='row'>

            <div className='five columns' style={{marginTop:'20px'}}>
            <label>Password</label>
            <input type= 'password' placeholder='Enter Password' ref={passwordRef}/>
            </div>
        </div>
        <br></br>
        <button type='submit'>Login</button>
      </form> 
    </>
  )
}

export default UnControlledComp
