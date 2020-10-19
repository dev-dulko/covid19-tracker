import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Chart({chartData, visibleChart}) {
    return (
        <div className='chart' style={{display:`${visibleChart}`}}>
            <h1>Historical Data of Pandemic</h1>
            <Line data={chartData} />
        </div>
    )
}


