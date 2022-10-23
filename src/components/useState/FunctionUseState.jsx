import React, {useState} from 'react'

// ************************** Rules To Use React useState **************************

// (1) Initialize useState at top of the function 
// (2) Can not call inside loops, conditional statement like "if else", "switch", or Ternary Operators 
// (3) Initialize useState only inside the function (not in "return" statement inside function)


function FunctionUseState() {

    const [Count, setCount] = useState(0)

    const CounterFun = ()=> {
        setCount(Count + 1)
    }

  return (
    <button onClick={CounterFun}>Count {Count} </button>
  )
}

export default FunctionUseState