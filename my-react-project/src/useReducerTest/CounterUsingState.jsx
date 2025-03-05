import React, { useState } from 'react'

const CounterUsingState = () => {

    const [count , setCount] = useState(0)
    //const [count , dispatch] = useReducer(reducer , 0)  //Syntax

    const increament = () => setCount(count+1)
    const decreament = () => setCount(count-1)
    const reset = () => setCount(0)
  return (
    <div>
       <h3>Counter Example with State</h3>

<p>Count: {count} </p>

<div>
  <button onClick={increament}> Increament </button>
  <button onClick={decreament}>Decreament</button>
  <button onClick={reset}>Reset</button>
</div>
    </div>
  )
}

export default CounterUsingState
