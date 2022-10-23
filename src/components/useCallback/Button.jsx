import React from 'react'

function Button({ text, handleClick, children }) {
  console.log('Rendering button - ', text)
  return (
    <button className='btn btn-primary mt-2' onClick={handleClick}>{text}</button>
  )
}

export default React.memo(Button)