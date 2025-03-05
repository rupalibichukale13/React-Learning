import React, { useState} from 'react';

function StateInClassCompAssign() {

    const [count, setCount] = useState(0);

    return(
        <div class="state">
             <h1 > State in Class Component</h1>
             <h2> Count:{count} </h2>
             <button  class="button" onClick ={() => setCount(count +1 )}>
                <b>+</b>
             </button>
        </div>
    )
}
export default StateInClassCompAssign;