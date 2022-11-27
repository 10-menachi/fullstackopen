import { useState } from "react"

function App() {

  const [selected, set_selected] = useState(0)
  const [votes, set_votes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  })

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const generate_random_integer = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const handle_selected_anecdote = () => {
    set_selected(generate_random_integer())
  }

  const vote = () => {
    const copy = {...votes}
    copy[selected] += 1
    set_votes(copy)
  }

  const most_voted_anecdote = () => {
    return Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)
  }

  console.log(most_voted_anecdote());

  return (
    <div className="App">
      <h3>{anecdotes[selected]}</h3>
      <h3>{votes[selected]}</h3>
      <button onClick={vote}>Vote</button>
      <button onClick={handle_selected_anecdote}>next anecdote</button>

      <h3>Anecdote with most votes</h3>

      <p>{anecdotes[most_voted_anecdote()]}</p>
    </div>
  )
}

export default App
