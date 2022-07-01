import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreBoard({data}) {
    console.log(data[0].id)
  return (
    <div>
        <h1>Scores coming soon!</h1>
        <Link to='/'>To Main Menu</Link>
        <p>Score number: {data[0].id}</p>
        <p>Player: {data[0].player}</p>
        <p>Points: {data[0].score}</p>
    </div>
  )
}
