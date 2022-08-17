import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  return (
    <div>
      {total ? (
        <>
          <h1>statistics</h1>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>all: {good + neutral + bad}</p>
          <p>average: {(good + bad * -1) / total}</p>
          <p>
            positive:{' '}
            {good && bad ? (good / total) * 100 + '%' : 'not enough feedbacks'}
          </p>
        </>
      ) : (
        <p>No feedbacks given</p>
      )}
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
