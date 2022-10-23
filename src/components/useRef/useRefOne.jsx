import React, { useEffect, useRef } from 'react'

function UseRefOne() {

    const inputFocus = useRef(null)

    useEffect(() => {

        inputFocus.current.focus()

    })

    return (
        <div>
            <input ref={inputFocus} type="text" />
        </div>
    )
}

export default UseRefOne