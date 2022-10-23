import React, { useState, useEffect } from 'react'

function UseEffectInFunction() {

    const [Count, setCount] = useState(0)

    useEffect( ()=>{
        document.title = Count
    })

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => { setCount(Count + 1) }}>Click {Count}</button>
        </div>
    )
}

export default UseEffectInFunction
