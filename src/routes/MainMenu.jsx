import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <div>
            <h1 id='gametitle'>CubeChaser</h1>
            <h4><em>Gotta collect 'em all!</em></h4>
            <Link to='scores'>See Scores</Link>
            <br />
            <Link to='game'>Play CubeChaser!</Link>
        </div>
    )
}
