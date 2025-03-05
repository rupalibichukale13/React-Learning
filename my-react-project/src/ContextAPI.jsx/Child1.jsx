import React from 'react'
import Child2 from './Child2';

const Child1 = (props) => {
  return (
    <div>
      <h1>Child component 1</h1>
      {/* <p>{props.message}</p> */}
      <Child2 message = {props.message}/>
    </div>
  )
}

export default Child1;
