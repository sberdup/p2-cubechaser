import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PlayerShape from './PlayerShape'
import PowerCube from './PowerCube';
import DeathCube from './DeathCube';

export default function ShapeArena() {
    // first we track the x-y position of player shape and keep track of score with state
    const [yourPosition, setYourPosition] = useState({ left: 300, top: 200 })
    const [cubesCollected, setCubesCollected] = useState(0)
    const [yourSpeed, setYourSpeed] = useState(10)

    // another state to track x-y of power cube component, should be passed as props to that component
    const [cubePosition, setCubePosition] = useState({ left: 500, top: 500 })
    const [deathCubePosition, setDeathCubePosition] = useState({ left: 1200, top: 600 })

    let playerWidth, playerHeight, cubeSide, arenaWidth, arenaHeight
    playerWidth = 40
    playerHeight = 30
    cubeSide = 20
    arenaWidth = 1600
    arenaHeight = 850

    // this handles motion of the player element tracking arrows onKeyDown from ShapeArena div
    // bounded to arena walls for now
    function yourMotion(direction) {
        console.log(direction)
        // arena boundaries taking a 40px wide player element into account
        switch (direction) {
            case 'ArrowLeft':
                if (yourPosition.left - yourSpeed < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourPosition(prev => ({ ...prev, left: (prev.left - yourSpeed) }))
                }
                break
            case 'ArrowRight':
                if (yourPosition.left + yourSpeed > (arenaWidth - playerWidth)) {
                    console.log("Can't go through the wall");
                } else {
                    setYourPosition(prev => ({ ...prev, left: (prev.left + yourSpeed) }))
                }
                break
            case 'ArrowUp':
                if (yourPosition.top - yourSpeed < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourPosition(prev => ({ ...prev, top: (prev.top - yourSpeed) }))
                }
                break
            case 'ArrowDown':
                if (yourPosition.top + yourSpeed > (arenaHeight - playerHeight)) {
                    console.log("Can't go through the wall");
                } else {
                    setYourPosition(prev => ({ ...prev, top: (prev.top + yourSpeed) }))
                }
                break
            default:
                console.log("What happened?")
        }
        console.log(yourPosition)
    }

    // want this to choose a random place to put a cube on spawn and set new state position so we can hand it as props & re-render cube
    function spawnCube(x = 0) {
        // cube takes its own width into account when choosing random position
        const xPos = Math.random() * (arenaWidth - cubeSide)
        const yPos = Math.random() * (arenaHeight - cubeSide)
        setCubePosition({ left: xPos, top: yPos })
        if (x === 1) {
            setCubesCollected(prev => prev + 1)
        }
        // adding 1 since state doesn't get updated after the last statement
        if (cubesCollected + 1 >= 5) {
            setYourSpeed(20)
        }
        if (cubesCollected + 1 >= 10) {
            setYourSpeed(30)
        }
        if (cubesCollected + 1 >= 15) {
            setYourSpeed(40)
        }
        if (cubesCollected + 1 >= 20) {
            setYourSpeed(50)
        }
    }


    return (
        <div style={{ border: '10px solid blue', position: 'absolute', top: '10px', left: '150px', width: (arenaWidth.toString() + 'px'), height: (arenaHeight.toString() + 'px') }} tabIndex='0' onKeyDown={e => yourMotion(e.key)}>
            <PlayerShape yourShape={yourPosition} width={playerWidth} height={playerHeight} />
            <PowerCube yourShape={yourPosition} cubePosition={cubePosition} spawnCube={spawnCube}
                sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight} />

            {(cubesCollected >= 1) ? <DeathCube yourShape={yourPosition} deathPosition={deathCubePosition} setDeathPosition={setDeathCubePosition} sideLength={cubeSide}
                playerWidth={playerWidth} playerHeight={playerHeight} arenaHeight={arenaHeight} arenaWidth={arenaWidth} />
                : null}

            <Link to='/'>Return to Main Menu</Link>
            <h3>You've collected {cubesCollected} cube{(cubesCollected === 1) ? '' : 's'}.</h3>
            {/* test button to trigger cube respawn */}
            <button onClick={spawnCube}>New Cube</button>
        </div>
    )
}
