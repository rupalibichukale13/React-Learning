import React, { useState } from 'react'
import MyContext from './MyContext'
import UseContextChild1 from './UseContextChild1'

const ParentUseContext = () => {
    const[welcomeMsg, setWelcomeMsg] = useState('Welcome to codemind Technology!!!')
  return (
    <>
      <h1>Parent Of Context API</h1>


    <MyContext.Provider value={welcomeMsg} >
        <UseContextChild1/>
         </MyContext.Provider>
    </>
  )
}

export default ParentUseContext
