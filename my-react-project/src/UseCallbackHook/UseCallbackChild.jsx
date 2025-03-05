import { useCallback, useState } from "react";


const UseCallbackChild = ({number1, number2, count}) => {

    const [sum1 ,setSum] = useState(0)

    const test = () =>{
        let sum = 0;
        sum = number1 + number2;
        console.log('button Clicked');
        console.log(sum);

        setSum(sum+1);
        console.log(sum1)
    }
    const handleClick = useCallback (()=>{
        let sum = 0;
        sum = number1 + number2;
        console.log('button Clicked');
        console.log(sum);

        setSum(sum+1);
        console.log(sum1)
        
    },[number1, number2])
    
  return (
    <div>
      <h3> UseCallbackChild</h3>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseCallbackChild
