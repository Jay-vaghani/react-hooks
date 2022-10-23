import React, { useEffect, useState } from 'react'

function UseEffectWithConditionInFunction() {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState("")

  useEffect(() => {
    console.log("Running");
    document.title = Count

  },[Count])

  return (
    <div>
      <h1>Name: {Name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => { setCount(Count + 1) }}>Click {Count}</button>
    </div>
  )

}

export default UseEffectWithConditionInFunction
