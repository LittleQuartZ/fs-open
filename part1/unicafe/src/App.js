import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return <p>{`${text}: ${value}`}</p>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  return (
    <div>
      {total ? (
        <>
          <h1>statistics</h1>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={(good + bad * -1) / total} />
          <StatisticLine text='positive' value={(good / total) * 100 + '%'} />
        </>
      ) : (
        <p>No feedbacks given</p>
      )}
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good => good + 1)} text='good' />
      <Button
        onClick={() => setNeutral(neutral => neutral + 1)}
        text='neutral'
      />
      <Button onClick={() => setBad(bad => bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
