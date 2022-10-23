import React, { useState } from 'react'

function FunctionUseStateWithPreviousState() {

  const initialCount = 0

  const [Count, setCount] = useState(initialCount)

  // const Increment = ()=>{
  //   setCount(Count + 1)
  // }

  // const Decrement = ()=>{
  //   setCount(Count - 1)
  // }

  // const Reset = ()=>{
  //   setCount(initialCount)
  // }

  // const MakeItFive = ()=>{
  //   for(let i = 0; i <= 5; i++){
  //     setCount(Count + 1)
  //   }
  // }


  const Increment = () => {
    setCount((previousValue) =>{
      console.log(previousValue);
      return previousValue + 1
    })
  }

  const Decrement = () => {
    setCount((previousValue) =>{
      console.log(previousValue);
      return previousValue - 1
    })
  }

  const Reset = () => {
    setCount((previousValue) =>{
      console.log(previousValue);
      return initialCount
    })
  }

  const MakeItFive = ()=>{
    for(let i = 0; i < 5; i++){
      setCount((previousValue) =>{
        return previousValue + 1
      })
    }
  } 






  return (
    <div>
      <h1>Count: {Count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={MakeItFive}>make it five</button>
    </div>
  )
}

export default FunctionUseStateWithPreviousState