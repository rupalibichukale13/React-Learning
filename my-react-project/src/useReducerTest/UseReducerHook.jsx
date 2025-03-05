import React, { useReducer } from 'react'

const UseReducerHook = () => {

//   const reducer = (count ,action) =>{

//     switch(action){
//         case 'add':
//             return count+1;
//             break;

//        case 'sub':
//         return count-1;
//         break;

//         case 'reset':
//         return 0;
//         break;

//         default :
//         break;

        
//     }

//   }
  const [count ,dispatch]  = useReducer(reducer, 0)

  function reducer(count, action){

    switch(action){
        case 'add':
            return count+1;
            break;

       case 'sub':
        return count-1;
        break;

        case 'reset':
        return 0;
        break;

        default :
        break;

        
    }

  }

  
  return (
    <>
    
   <h3>Counter using usereducer hook</h3>
   <p>Count :{count}</p>
   <div>
  <button onClick={()=>dispatch('add')}> Increament </button>
  <button onClick={()=>dispatch('sub')}>Decreament</button>
  <button onClick={()=>dispatch('reset')}>Reset</button>
</div>
    </>
  )
}

export default UseReducerHook


