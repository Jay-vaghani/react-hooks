import React from 'react'
import { UserContext } from '../../App'

function ComponentA() {
  return (
    <>
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h1>Use Context Value in Component A {user}</h1>
              </div>
            )
          }
        }
      </UserContext.Consumer>
    </>
  )
}

export default ComponentA