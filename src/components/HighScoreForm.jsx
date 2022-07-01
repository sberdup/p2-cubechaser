import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HighScoreForm({ cubesCollected, highScoreUpdater }) {
    let navigate = useNavigate()

    async function submitHandler(e) {
        e.preventDefault()
        const player = e.target.childNodes[1].value
        console.log(player)
        if (player === '') return alert("You forgot to write your name!")
        if (cubesCollected === 0) return alert("Wow, a real deal hacker, in the flesh.")

        const playerObject = { 'player': player, 'score': cubesCollected }

        const resp = await fetch('https://p2-backend-cubechaser.herokuapp.com/highscores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playerObject)
        })
        const data = await resp.json()
        if (data.result === null) {
            console.log('retrieving data')
          }
        highScoreUpdater(playerObject)
        navigate('/scores')
        // .catch(error => {
        //     console.error('Error', error)
        // })
    }
    return (
        <div id='highscorebackground'>
            <h1 style={{ color: 'red', marginBottom: '5%', fontSize: '10em' }}>You died!</h1>
            <h2 id='valhalla'>It's ok, you'll be remembered.</h2>
            <div style={{ backgroundColor: 'limegreen', margin: 'auto', width: '20%', border: '5px solid lightsteelblue', borderRadius: '5px' }}>
                <form id='highscoreform' onSubmit={submitHandler}>
                    <label for='name'>Enter your player name!  </label>
                    <input name='name' type='text' maxLength='5'></input>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}
