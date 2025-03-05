import React, { useState } from 'react'

const FormBasic = () => {
    const [firstName ,setFirstName] = useState('')
    const [lastName ,setLastName] = useState('')
    const [email ,setEmail] = useState('')

    const handleFirstNameChange = (e) =>{
        // console.log(`Handle First Name chnage ` +e);
        console.log(e.target.value);
        setFirstName(e.target.value)  
    }
    const handleLastNameChange = (e) =>{
        console.log(e.target.value);
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handleSubmit = (e)=>{
        //save data to DB or sent to some third party api
        console.log(`Inside submit button`);
       alert(`First Name : ${firstName} Last Name:${lastName} Email:${email}`);
        e.preventDefault()
    }

  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>
        <div>
            First Name: <input type = "text" name='' id='' value={firstName} onChange={handleFirstNameChange}></input>
        </div>
        <br></br>
        <div>
            Last Name: <input type = "text" name='' id='' value={lastName}  onChange={handleLastNameChange}></input>

             </div>
        <br></br>
             <div>
           Email Id: <input type = "email" name='' id='' value={email}  onChange={handleEmailChange}></input>

             </div>
             <br></br>
             <button type='submit'>SUBMIT</button>
      </form>

    </div>
  )
}

export default FormBasic
