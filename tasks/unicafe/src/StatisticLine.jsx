import React from 'react'

function StatisticLine({text, value}) {
  return (
    <div>
        <p>{text} {value}</p>
    </div>
  )
}

export default StatisticLine