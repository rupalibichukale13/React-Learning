import React, { useMemo } from 'react'

const UseMemoComp = ({number1 , number2}) => {

    const result = useMemo(()=>{
        console.log('Inside sum function');
        let sum;
        sum = number1 + number2;
        return sum;

    },[number1 , number2])

  return (
    <>
      <h3>UseMemo Comp</h3>
      <h4>Addition is:{result} </h4>
    </>
  )
}

export default UseMemoComp
