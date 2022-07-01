import React from 'react'

export default function HighScoreForm({cubesCollected}) {
    function submitHandler(e){
        e.preventDefault()
        console.log(e.target.childNodes[1].value)
    }
    return (
        <div id='highscorebackground'>
            <h1 style={{ color: 'red', marginBottom:'5%', fontSize:'10em'}}>You died!</h1>
            <h2 id='valhalla'>It's ok, you'll be remembered.</h2>
            <div style={{ backgroundColor: 'limegreen', margin: 'auto', width: '20%', border:'5px solid lightsteelblue', borderRadius:'5px'}}>
                <form id='highscoreform' onSubmit={submitHandler}>
                    <label for='name'>Enter your player name!  </label>
                    <input name='name' type='text' maxLength='5'></input>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}
