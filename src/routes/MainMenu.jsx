import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    const [howToPlay, setHowToPlay] = useState(false)
    const howToPlayStyle = {display:'flex', flexDirection:'column', textAlign:'left', alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)', }
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 id='gametitle'>CubeChaser</h1>
            <h4><em>Gotta collect 'em all!</em></h4>
            <Link to='game' style={{marginTop:'1em'}}><h2>Play CubeChaser!</h2></Link>
            <button onClick={() => setHowToPlay(prev => !prev)}>How to Play</button>
            <ol style={howToPlay ? howToPlayStyle : {display:'none'}}>
                <li style={{color:'green', outlineColor:'black'}}>Move your block using the ← ↑ → ↓ arrow keys.</li>
                <li style={{color:'yellow'}}>Get yellow power cubes to add to your score and speed but...</li>
                <li style={{color:'red'}}>Watch out for the red cubes!</li>
            </ol>
            <Link to='scores' style={{marginTop:'20em'}}>Highscores</Link>
        </div>
    )
}
