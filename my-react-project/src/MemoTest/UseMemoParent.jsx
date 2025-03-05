import React, { useState } from 'react'
import UseMemoComp from './UseMemoComp'

const UseMemoParent = () => {
    const [count, setCount] = useState(0)

    const increamentCount = () =>{
        setCount(count+1);
        console.log('Inside Increament Count');
    }
  return (
    <div>
      <h3>UseMemo Parent</h3>
      <p>Count:{count} </p> <button onClick={increamentCount}>Count++</button>

      <UseMemoComp number1={10} number2={count}/>
    </div>
  )
}

export default UseMemoParent
