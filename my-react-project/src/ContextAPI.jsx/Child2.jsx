import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
    <div>
      <Child3 message = {props.message}/>
    </div>
  )
}

export default Child2
