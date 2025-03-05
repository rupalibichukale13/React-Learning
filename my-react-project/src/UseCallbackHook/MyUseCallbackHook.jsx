

// const memorizedFunction = useCallback(()=>{

// },[])/

import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const MyUseCallbackHook = () => {
    const [count, setCount] = useState(0)
    const[sum, setSum] = useState(0)

    const handleClick = useCallback(()=>{
        setCount(count+1)
        console.log(count);
    },[sum])
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default MyUseCallbackHook
