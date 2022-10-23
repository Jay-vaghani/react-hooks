import React, { useState } from 'react'



function FunctionUseStateWithArray() {

    const [Items, setItems] = useState([])

    const addNum = () => {
        setItems([
            ...Items,
            {
                number: Math.floor(Math.random() * 10) + 1,
                key: Items.length
            }
        ])

    }

    return (
        <div>
            <button onClick={addNum}>Add Number</button>
            <ul>
                {Items.map((element) => {
                    return (
                        <li key={element.key}>{element.number}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FunctionUseStateWithArray