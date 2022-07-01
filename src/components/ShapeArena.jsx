import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PlayerShape from './PlayerShape'
import PowerCube from './PowerCube';
import DeathCube from './DeathCube';

export default function ShapeArena({ cubesCollected, setCubesCollected }) {
    // first we track the x-y position of player shape and keep track of score with state
    const [yourPosition, setYourPosition] = useState({ left: 300, top: 200 })
    const [yourSpeed, setYourSpeed] = useState(10)
    // const [gameState, setGameState] = useState('running')

    // another state to track x-y of power cube component, should be passed as props to that component
    const [cubePosition, setCubePosition] = useState({ left: 500, top: 500 })

    let playerWidth, playerHeight, cubeSide, arenaWidth, arenaHeight
    playerWidth = 40
    playerHeight = 30
    cubeSide = 20
    arenaWidth = 1600
    arenaHeight = 850

    //routing variable
    let navigate = useNavigate()

    // this handles motion of the player element tracking arrows onKeyDown from ShapeArena div
    // bounded to arena walls for now
    function yourMotion(direction) {
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
                console.log("Non-direction pressed")
        }
        // console.log(yourPosition)
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
        if (cubesCollected + 1 >= 3) {
            setYourSpeed(15)
        }
        if (cubesCollected + 1 >= 15) {
            setYourSpeed(25)
        }
        if (cubesCollected + 1 >= 30) {
            setYourSpeed(40)
        }
        if (cubesCollected + 1 >= 40) {
            setYourSpeed(50)
        }
        if (cubesCollected + 1 >= 60) {
            setYourSpeed(60)
        }
    }
    
    function touchDeathCube() {
        navigate('/newhighscore')
    }

    return (
        <div id='gameArena' style={{width: (arenaWidth.toString() + 'px'), height: (arenaHeight.toString() + 'px') }}
            tabIndex='0' onKeyDown={e => yourMotion(e.key)}>
            <PlayerShape yourShape={yourPosition} width={playerWidth} height={playerHeight} />
            <PowerCube yourShape={yourPosition} cubePosition={cubePosition} spawnCube={spawnCube}
                sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight} />
            {/* 4(for now) discrete components with different initial starting speed scalars. Should also scale with player speed */}
            {(cubesCollected >= 1) ? <DeathCube yourShape={yourPosition} sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight}
                arenaHeight={arenaHeight} arenaWidth={arenaWidth} xStarting={5} yStarting={5} touchDeathCube={touchDeathCube} />
                : null}
            {(cubesCollected >= 7) ? <DeathCube yourShape={yourPosition} sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight}
                arenaHeight={arenaHeight} arenaWidth={arenaWidth} xStarting={10} yStarting={10} touchDeathCube={touchDeathCube} />
                : null}
            {(cubesCollected >= 25) ? <DeathCube yourShape={yourPosition} sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight}
                arenaHeight={arenaHeight} arenaWidth={arenaWidth} xStarting={15} yStarting={15} touchDeathCube={touchDeathCube} />
                : null}
            {(cubesCollected >= 50) ? <DeathCube yourShape={yourPosition} sideLength={cubeSide} playerWidth={playerWidth} playerHeight={playerHeight}
                arenaHeight={arenaHeight} arenaWidth={arenaWidth} xStarting={25} yStarting={25} touchDeathCube={touchDeathCube} />
                : null}

            <Link to='/' onClick={() => setCubesCollected(0)}>Return to Main Menu</Link>
            <h3>You've collected {cubesCollected} cube{(cubesCollected === 1) ? '' : 's'}.</h3>
            {/* test button to trigger cube respawn */}
            <button onClick={spawnCube}>New Cube</button>
        </div>
    )
}
