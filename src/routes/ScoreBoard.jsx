import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreBoard({ data }) {
    console.log(data)
    const sortedScores = data.sort((a, b) => {
        return b.score - a.score
    })
    return (
        <div>
            <h1>Leaderboard</h1>
            <Link to='/'>To Main Menu</Link>
            <br/>
            <Link to='/game'>New Game</Link>
            <table id='scoreboard' style={{marginTop:'1em'}}>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedScores.map((record, idx) => (
                        <tr key={idx}>
                            <td>{record.player}</td>
                            <td>{record.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
