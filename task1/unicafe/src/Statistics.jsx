import React from 'react'
import StatisticLine from './StatisticLine'

function Statistics({good, neutral, bad, all}) {
    const average = (good - bad) / all
    const positive = ((good - bad) / all) * 100
    const statistic_data = [
        {
            text: "good",
            value: good
        },
        {
            text: "neutral",
            value: neutral
        },
        {
            text: "bad",
            value: bad
        },
        {
            text: "all",
            value: all
        },
        {
            text: "average",
            value: average
        },
        {
            text: "positive",
            value: positive
        },
      ]
  return (
    good || neutral || bad !== 0? 
    <div>
        <h1>statistics</h1>

        <table>
            {statistic_data.map((statistic, index) => {
                return ( 
                <thead key={index}>
                        <tr>
                            <td><StatisticLine text={statistic.text} value={statistic.value} /></td>
                        </tr>
                </thead> 
                )
            })}
        </table>
    </div> : 
    <h4>No feedback given</h4>
  )
}

export default Statistics