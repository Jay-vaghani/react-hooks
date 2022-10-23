import React, { useContext } from 'react'
import { ChanelContext, UserContext } from "../../App"




function ComponentC() {
  const user = useContext(ChanelContext)
  const chanel = useContext(UserContext)

  return (
    <h1> {user} {chanel}</h1>
  )
}

export default ComponentC