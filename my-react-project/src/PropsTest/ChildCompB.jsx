import React from 'react'

// const ChildCompB = (props) => {
    const ChildCompB = ({messg}) => {
  return (
    <>
      {/* <h2>Child Component B {props.msg}</h2> */}


      <h2>Child Component B {messg}</h2>

    </>
  )
}

export default ChildCompB;
