import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreBoard({data}) {
  return (
    <div>
        <h1>Scores coming soon!</h1>
        <Link to='/'>To Main Menu</Link>
        <p>{data}</p>
    </div>
  )
}
