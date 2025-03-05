import React from 'react'
import ChildCompB from './ChildCompB'

// const ChildCompA = (props) => 
    const ChildCompA = ({msg}) => {      //Destructuring
  return (
    <>
      {/* <h2>Child Component A {props.msg}</h2> */}
     {/* <ChildCompB messg = {props.msg}/> */}

     
     <h2> Child Comp A</h2>
     <ChildCompB messg = {msg}/>

    </>
  )
}

export default ChildCompA;
