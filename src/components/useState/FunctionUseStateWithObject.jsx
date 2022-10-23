import React, { useState } from 'react'

// ************************** Rules To Use React useState **************************

// (1) useState dose not automatically update and merge object data type 


function FunctionUseStateWithObject() {

    const [Name, setName] = useState({
        fname: "",
        lname: ""
    })


    // const FirstName = (e) => {
    //     setName({
    //         fname: Name.fname,
    //         lname: Name.lname,
    //         fname: e.target.value
    //     })
    // }


    const FirstName = (e) => {
        setName({
            ...Name,
            fname: e.target.value
        })
    }

    // const LastName = (e) => {

    //     setName({
    //         fname: Name.fname,
    //         lname: Name.lname,
    //         lname: e.target.value
    //     })
    // }

    const LastName = (e) => {

        setName({
            ...Name,
            lname: e.target.value
        })
    }

    return (
        <div>
            <input type="text" onChange={FirstName} />
            <input type="text" onChange={LastName} />

            <h1>First Name = {Name.fname} </h1>
            <h1>Last Name = {Name.lname}</h1>

            <h2>{JSON.stringify(Name)}</h2>
        </div>
    )
}

export default FunctionUseStateWithObject