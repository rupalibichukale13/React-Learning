import React from 'react'
import ChildCompA from './ChildCompA'

const ParentComp = () => {
    const message = "Welcome from Parent Comp";
  return (
    <>
     <h2>In Parent Comp</h2>
     <ChildCompA msg={message}/>
    </>
  )
}

export default ParentComp;
