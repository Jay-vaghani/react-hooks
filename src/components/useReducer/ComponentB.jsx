import React, { useContext } from 'react'
import { CountText } from '../../App'



function ComponentB() {

  const count = useContext(CountText)

  return (
    <div>
      <h3>Component B Inside Component A Count Value {count.CountState}
        <button className="btn btn-primary mx-1" onClick={()=>count.CountDispatch('reset')}>Reset</button>
        <button className="btn btn-primary mx-1" onClick={()=>count.CountDispatch('increment')}>Increment</button>
        <button className="btn btn-primary mx-1" onClick={()=>count.CountDispatch('decrement')}>Decrement</button>
      </h3>
    </div>
  )
}

export default ComponentB
