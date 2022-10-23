import React from 'react'
import { UserContext, ChanelContext } from '../../App'

function ComponentA() {
    return (
        <>
            <UserContext.Consumer>
                {
                    (user) => {
                        return (
                            <ChanelContext.Consumer>
                                {
                                    (chanel) => {
                                        return(
                                            <div>
                                                <h1>Use Context Value in Component B is {user} {chanel}</h1>
                                            </div>
                                        )
                                    }
                                }
                            </ChanelContext.Consumer>


                        )
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default ComponentA