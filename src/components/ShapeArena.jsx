import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PlayerShape from './PlayerShape'
import PowerCube from './PowerCube';

export default function ShapeArena() {
    // first we track the x-y position of player shape and keep track of score with state
    const [yourShape, setYourShape] = useState({ left: 0, top: 0 })
    const [cubesCollected, setCubesCollected] = useState(0)

    // another state to track x-y of power cube component, should be passed as props to that component
    const [cubePosition, setCubePosition] = useState({ left: 100, top: 100})

    // this handles motion of the player element tracking arrows onKeyDown from ShapeArena div
    // bounded to arena walls for now
    function yourMotion(direction) {
        console.log(direction)
        // arena boundaries taking a 40px wide player element into account
        switch (direction) {
            case 'ArrowLeft':
                if (yourShape.left - 10 < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({ ...prev, left: (prev.left - 10) }))
                }
                break
            case 'ArrowRight':
                if (yourShape.left + 10 > 1840) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({ ...prev, left: (prev.left + 10) }))
                }
                break
            case 'ArrowUp':
                if (yourShape.top - 10 < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({ ...prev, top: (prev.top - 10) }))
                }
                break
            case 'ArrowDown':
                if (yourShape.top + 10 > 860) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({ ...prev, top: (prev.top + 10) }))
                }
                break
            default:
                console.log("What happened?")
        }
        console.log(yourShape)
    }

    // want this to choose a random place to put a cube on spawn and set new state position so we can hand it as props & re-render cube
    function spawnCube(x = 0) {
        // cube takes its own width into account when choosing random position
        const xPos = Math.random() * 1850
        const yPos = Math.random() * 860
        setCubePosition({left:xPos, top:yPos})
        if (x === 1) {
            setCubesCollected(prev => prev + 1)
        }
    }

    return (
        <div style={{ border: '10px solid red', position: 'absolute', top: '10px', left: '10px', width: '1880px', height: '890px' }} tabIndex='0' onKeyDown={e => yourMotion(e.key)}>
            <PlayerShape yourShape={yourShape} />
            <PowerCube yourShape={yourShape} cubePosition={cubePosition} spawnCube={spawnCube}/>
            <Link to='/'>Return to Main Menu</Link>
            <h3>You've collected {cubesCollected} cube{(cubesCollected === 1) ? '' : 's'}.</h3>
            {/* test button to trigger cube respawn */}
            <button onClick={spawnCube}>New Cube</button>
        </div>
    )
}
