

import React from 'react'

function Advancejs() {


    // MAP() METHOD CREATES A NEW ARRAY POPULATED WITH THE RESULTS OF CALLING A PROVIDED FUNCTION ON EVERY ELEMENT IN THE CALLING ARRAY.

    // THE FILTER() METHOD  FILTER DOWN ELEMENTS FROM THE GIVEN ARRAY THAT PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.

    // THE REDUCE() METHOD ACCUMULATE EACH ELEMENT IN ARRAY 

    const array1 = [1, 4, 9, 16];



    return (
        <div>

            {/* MAP() METHOD */}

            {/* <h2>{array1.map((element)=>{
                return element * 2
            })}</h2> */}

            {/* FILTER() METHOD */}

            {/* <h2>{array1.filter((element)=>{
                return element > 5
            })}</h2> */}

            {/* REDUCE() */}

            <h2>{array1.reduce((accumulator, currentValue) => {
                
                return accumulator + currentValue
            })}</h2>

        </div>
    )
}

export default Advancejs