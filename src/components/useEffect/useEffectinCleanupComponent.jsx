import React, { useState } from 'react'
import UseEffectRunOnesInFunction from './useEffectRunOnesInFunction'

function UseEffectinCleanupComponent() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        {display && <UseEffectRunOnesInFunction />}
        <button onClick={()=>{setDisplay(false)}}>Remove</button>
        
    </div>
  )
}

export default UseEffectinCleanupComponent
