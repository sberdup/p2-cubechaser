import React from 'react'

export default function HighScoreForm() {
    return (
        <div>
        <h1 style={{color:'red'}}>You died!</h1>
        <h2 id='valhalla'>It's ok, you'll be remembered.</h2>
            <div style={{ backgroundColor: 'lightgreen', margin: 'auto', width: '30%', top: '30%' }}>
                <form id='highscoreform'>
                    <label for='name'>Enter your player name!  </label>
                    <input name='name' type='text' maxLength='5'></input>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}
