import React from 'react'

function Count({ text, count }) {

	console.log(`Rendering ${text}`)

    return (
        <div className='mt-3'>
            <h4>{text} - {count}</h4>
        </div>
    )
}

export default React.memo(Count)
