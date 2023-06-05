import React from 'react'

function Button({ restartGame }) {
  return (
    <button onClick={restartGame} className='btn'>
      Restart Game
    </button>
  )
}

export default Button
