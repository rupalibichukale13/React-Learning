import React from 'react'
import ChildCompA from './ChildCompA';
import ChildCompB from './ChildCompB';

const ParentComp = () => {

    let person = {
      name : "Rupali Bichukale",
      age: '21',
      address : 'Sangola',
      course : 'B.Tech'
  };
  return (
    <>
     <h2>Welcome to Parent Component </h2>
     <ChildCompA personObj={person}/>
     <ChildCompB personObj={person}/>
    </>
  )
}

export default ParentComp;
