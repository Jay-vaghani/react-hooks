import React from 'react'
import { useReducer } from 'react'


const initialStage = 0

const reducer = (state, action) => {
    if (action === 'increment') {
        return state + 1
    } else if (action === 'decrement') {
        return state - 1
    } else if (action === 'reset') {
        return initialStage
    }else{
        return initialStage
    }
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initialStage)

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary mx-3" onClick={() => dispatch('reset')}>Reset</button>
            <button className="btn btn-primary mx-3" onClick={() => dispatch('increment')}>Increment</button>
            <button className="btn btn-primary mx-3" onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default UseReducer 
