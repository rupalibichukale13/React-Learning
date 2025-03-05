import React, { useState } from 'react'
import UseCallbackChild from './UseCallbackChild'

const UsecallbackParent = () => {
    const [count,setCount] = useState(0)

    const increamentCount = () =>{
        setCount(count+1)
    }
  return (
    <>
     <h2>Usecallback Parent</h2>
     <p>Count:{count}</p> <button onClick={increamentCount}>Increament</button>

     <UseCallbackChild number1 ={10} number2={count} count={count}/>
     </>
  )
}

export default UsecallbackParent
