import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <div>
            <h1 id='gametitle'>CubeChaser</h1>
            <h4><em>Gotta collect 'em all!</em></h4>
            <Link to='game' style={{marginTop:'1em', position:'absolute', marginLeft:'-4em'}}><h2>Play CubeChaser!</h2></Link>
            <button style={{position:'relative', marginTop:'10em'}}>How to Play</button>
            <Link to='scores' style={{top:'90vh', position:'absolute', marginLeft:'-3em'}}>Highscores</Link>
        </div>
    )
}
