import React, {  useState } from 'react'
import useDocTitle from './useDocTitle'

function DocTitleTwo() {

    const [count, setCount] = useState(0)

    useDocTitle(count)

    return (
        <div>
            <button className='btn btn-primary mt-2' onClick={() => setCount(count + 1)}>Count 2</button>
        </div>
    )
}

export default DocTitleTwo