import React from 'react'

function Form({ handleSubmitGuess, gameStatus }) {
  const [guessWord, setGuessWord] = React.useState('')
  function runWord(event) {
    event.preventDefault()
    console.info({ guessWord })
    handleSubmitGuess(guessWord)
    setGuessWord('')
  }
  return (
    <div>
      <form onSubmit={runWord} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          id='guess-input'
          type='text'
          disabled={gameStatus !== 'Running'}
          value={guessWord}
          onChange={(event) => {
            setGuessWord(event.target.value.toUpperCase())
          }}
          pattern='[a-zA-Z]{5}'
          maxLength={5}
          title='Must contain 5 characters'
        />
      </form>
    </div>
  )
}

export default Form
