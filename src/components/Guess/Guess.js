import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const classStyle = status ? `cell ${status}` : 'cell'
  return <span className={classStyle}>{letter}</span>
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer)
  console.log({ result })
  return (
    <div>
      <p className='guess'>
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : ''}
            status={result ? result[num].status : ''}
          />
        ))}
      </p>
    </div>
  )
}

export default Guess

/*result[letter].status*/
