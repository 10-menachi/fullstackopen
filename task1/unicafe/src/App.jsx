import { useState } from "react"
import Button from "./Button"
import Statistics from "./Statistics"

function App() {

  const [good, set_good] = useState(0)
  const [neutral, set_neutral] = useState(0)
  const [bad, set_bad] = useState(0)
  const all = good + neutral + bad

  const handle_good = () => {
    set_good(good + 1)
  }
  const handle_neutral = () => {
    set_neutral(neutral + 1)
  }
  const handle_bad = () => {
    set_bad(bad + 1)
  }

  const button_data = [
    {
      text: "good",
      setter: handle_good
    },
    {
      text: "neutral",
      setter: handle_neutral
    },
    {
      text: "bad",
      setter: handle_bad
    }
  ]

  

  return (
    <div>
        <h1>Give Feedback</h1>

        <div>
          {button_data.map((button, index) => {
            return <Button key={index} text={button.text} setter={button.setter} />
          })}
          
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
         />


    </div>
  )
}

export default App
