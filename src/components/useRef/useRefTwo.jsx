import React, { useState, useEffect, useRef } from 'react'

function UseRefTwo() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <h1>Seconds {timer}</h1>
            <button className='btn btn-primary' onClick={() => clearInterval(intervalRef.current)}>Stop !</button>
        </div>
    )
}

export default UseRefTwo