import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)


    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title title={'Use Callback Hook'} />
            <Count text='Age' count={age} />
            <Button text='Increase Age' handleClick={incrementAge} />
            <Count text="Salary" count={salary} />
            <Button text='Increase Salary' handleClick={incrementSalary} />

        </div>
    )
}

export default ParentComponent
