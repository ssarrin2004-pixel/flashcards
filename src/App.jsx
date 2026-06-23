import { useState } from 'react'
import './App.css'

const cards = [
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "What is Japan's highest mountain?", answer: "Mount Fuji" },
  { question: "What is the traditional Japanese theater called?", answer: "Kabuki" },
  { question: "What is the Japanese word for temple?", answer: "Otera" },
  { question: "What currency does Japan use?", answer: "Yen" },
  { question: "What is the national sport of Japan?", answer: "Sumo Wrestling" },
  { question: "What is the famous bullet train in Japan called?", answer: "Shinkansen" },
  { question: "What is the Japanese art of paper folding?", answer: "Origami" },
  { question: "What is the largest city in Japan?", answer: "Tokyo" },
  { question: "What is the Japanese word for goodbye?", answer: "Sayonara" },
]

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleFlip = () => setIsFlipped(!isFlipped)

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setIsFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  const handleBack = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setIsFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  const handleSubmit = () => {
    const correct = cards[currentCard].answer.toLowerCase()
    const userGuess = guess.toLowerCase().trim()
    if (userGuess === correct) {
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }
  }

  return (
    <div className="App">
      <h1>🗾 Japan Flashcards</h1>
      <p>Test your knowledge of Japan!</p>
      <p>Number of cards: {cards.length}</p>

      <div
        className={`card ${feedback}`}
        onClick={handleFlip}
      >
        {isFlipped ? (
          <div className="card-back">
            <p>{cards[currentCard].answer}</p>
          </div>
        ) : (
          <div className="card-front">
            <p>{cards[currentCard].question}</p>
          </div>
        )}
      </div>

      <div className="guess-section">
        <input
          type="text"
          placeholder="Guess the answer here!"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Guess</button>
      </div>

      <div className="nav-buttons">
        <button onClick={handleBack} disabled={currentCard === 0}>⬅️ Back</button>
        <button onClick={handleNext} disabled={currentCard === cards.length - 1}>Next ➡️</button>
      </div>
    </div>
  )
}

export default App