import React, { useEffect, useRef, useState } from 'react'

const AdvanceFormHand = () => {

    const[form, setForm] = useState({
        userName:'',
        password:'',
        email:'',

    })
     const nameRef = useRef()
    const handleChange = (e)=>{
        const{name, value} = e.target;
            console.log(`Name :${name}  Value:${value}`);

            setForm((preState)=>({
              ...preState,[name] :value
            }))

            
    }
    const handleSubmit = (e)=>{
        //save data to DB or sent to some third party api
        console.log(`Inside submit button`)
        alert('form submitted')
        e.preventDefault()
    }

    useEffect(()=>{
      nameRef.current.focus();
    },[])
//const Ref =React.createRef() //this is for class component
  return (
    <>
      <h1> Advance Form Handling</h1>

<form onSubmit={handleSubmit}>
  <div>
      First Name: <input type = "text" name='userName' id='' value={form.userName} onChange={handleChange} required ref={nameRef}></input>
       </div> 
  <br></br>

  <div>
  Password: <input type = "password" name='password' id='' value={form.password} onChange={handleChange} required></input>
  </div>
  <br></br>
  <div>
  Email: <input type = "email" name='email' id='' value={form.email} onChange={handleChange} required></input>
  </div>
  <br></br>
  <button type='submit'>SUBMIT</button>
      </form>

    </>
  )
}

export default AdvanceFormHand;
