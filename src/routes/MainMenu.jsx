import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
  return (
    <div>
        <h1>CubeChaser</h1>
        <Link to='scores'>See Scores</Link>
        <br/>
        <Link to='game'>Play CubeChaser!</Link>
    </div>
  )
}
