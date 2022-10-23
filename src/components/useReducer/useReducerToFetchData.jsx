import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: '',
    error: ''
}

const Reducer = (state, action) => {
    if (action.status === 'success') {
        return {
            loading: false,
            post: action.data.title,
        }
    } else {
        return {
            loading: false,
            error: 'Something Went Wrong',
        }
    }
}



function UseReducerToFetchData() {

    const [state, dispatch] = useReducer(Reducer, initialState)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => dispatch({ status: 'success', data: response.data }))
            .catch((error) => console.log(error))
    }, [])



    console.log(state);

    return (
        <div>
            <h1>{state.post}</h1>
        </div>
    )
}

export default UseReducerToFetchData
