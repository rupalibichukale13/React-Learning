import React from 'react'
import MemoComp from './MemoComp'
import { useState } from 'react'

const MemoParent = () => {

    const [count, setCount] = useState(0)

    const increamentCount = () =>{
        setCount(count+1);
        console.log('Inside Increament Count');
    }
  return (
    <>
     <h2>Memo Parent</h2> 
     <p>Count:{count} </p> <button onClick={increamentCount}>Count++</button>

     <MemoComp name={'Rupali'} count = {count}/>

    </>
  )
}

export default MemoParent
