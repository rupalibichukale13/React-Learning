import React, { useContext } from 'react'
import MyContext from './MyContext'

const UseContextChild3 = () => {
   const message=  useContext(MyContext)
  return (
    <div>
      <h4>In UseContextChild3</h4>
      <p>{message}</p>
    </div>
  )
}

export default UseContextChild3
