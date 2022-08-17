import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good => good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral => neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad => bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good + neutral + bad}</p>
      <p>average: {(good + bad * -1) / (good + neutral + bad)}</p>
      <p>
        positive:{' '}
        {good && bad
          ? (good / (good + neutral + bad)) * 100 + '%'
          : 'not enough feedbacks'}
      </p>
    </div>
  )
}

export default App
