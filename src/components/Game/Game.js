import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import LoserBanner from '../LoserBanner'
import WinnerBanner from '../WinnerBanner'
import Button from '../Button'

// Pick a random word on every pageload.
let answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guess, setGuess] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('Running')

  function handleSubmitGuess(guessWord) {
    const nextGuesses = [...guess, guessWord]
    setGuess(nextGuesses)

    if (guessWord.toUpperCase() === answer) {
      setGameStatus('Won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('Lost')
    }
  }

  function restartGame() {
    answer = sample(WORDS)
    console.log(`Restart gameee ${answer}!!`)
    setGuess([])
    setGameStatus('Running')
  }

  return (
    <>
      {gameStatus !== 'Running' && (
        <Button restartGame={restartGame} />
      )}
      <GuessResults answer={answer} guess={guess} />
      <Form
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'Won' && (
        <WinnerBanner numOfGuesses={guess.length} />
      )}
      {gameStatus === 'Lost' && <LoserBanner answer={answer} />}
    </>
  )
}

export default Game
