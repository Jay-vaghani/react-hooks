import React, { useEffect, useState } from 'react'

function UseEffectRunOnesInFunction() {


    const [Count, setCount] = useState({
        X: "",
        Y: ""
    })

    const MousePosition = (e) => {

        console.log(2);

        setCount({
            X: e.clientX,
            Y: e.clientY
        })
    }

    useEffect(() => {

        console.log(1);


        window.addEventListener("mousemove", MousePosition)


        return ()=>{
            window.removeEventListener("mousemove", MousePosition)
        }

    }, [])



    return (
        <div>
            {JSON.stringify(Count)}
        </div>
    )
}

export default UseEffectRunOnesInFunction
