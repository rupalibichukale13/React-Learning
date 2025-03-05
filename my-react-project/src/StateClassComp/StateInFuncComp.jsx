import React, { useState } from 'react'

const StateInFuncComp = () => {

    // this.state = {
    //     Name: "Rupali"
    // }
    // setState ({Name: "Pooja"});


    //syntax of useState hook in function component
    //const[ stateName , func name to change state] = usestate(initial value)

    const [UserName , setUserName] = useState("Guest")

    //Number state
    const [count, setCount] = useState(0)

    //object state
    const [person, changePerson] = useState({Name: "Rupali" , Age:21})

    const changeUser = () =>{
        setUserName( 'Admin');
    }

    const changeCount = () => {
        setCount(count +1);

    }

    const UpdatePerson = () => {
        changePerson (prePerson => (
            {...prePerson , Name:"Pooja"}
        ))

    }

  return (
    <>
        <h1>State in Functional Component</h1>
        <h2>Current User: {UserName}</h2>
        <button onClick={changeUser}> Login as Admin</button>

        <h2>Count :{count}</h2>
        <button onClick={changeCount}> + </button>

        <h2> Person : {JSON.stringify(person)}</h2>
        <button onClick={UpdatePerson}>Change Person</button>


        
    </>
  )
}

export default StateInFuncComp;
