import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectToFetchData() {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((res)=>{
        setData(res.data)
      }).catch((err)=>{
        console.log(err);
      })
  }, [])



  return (
    <div>
      {data.map((list) => {
        return <li key={list.id}>{list.title}</li>
      })}
    </div>
  )
}

export default UseEffectToFetchData
