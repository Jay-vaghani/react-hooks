import React, { useState, useMemo } from 'react'

function UseMemo() {

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const increaseCountOne = () => {
        setCountOne(countOne + 1)
    }

    const increaseCountTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo( () => {
        let i = 0
        while (i <= 1000000000) i++

        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <button className='btn btn-primary mx-2' onClick={increaseCountOne}>Count  {countOne}</button>
            <button className='btn btn-primary mx-2' onClick={increaseCountTwo}>Count  {countTwo}</button>
            {isEven ? 'Even' : 'Odd'}
        </div>
    )
}

export default UseMemo