import React, { useState, useEffect, useRef } from 'react'

export default function DeathCube({ yourShape: { left: yourX, top: yourY },
    sideLength, playerWidth, playerHeight, arenaHeight, arenaWidth, xStarting, yStarting, touchDeathCube }) {

    const [deathCubePosition, setDeathCubePosition] = useState({left:0, top:0})

    useEffect(() => {
        const left = Math.random() * (arenaWidth - sideLength)
        const top = Math.random() * (arenaHeight - sideLength)
        setDeathCubePosition({left:left, top:top})
    }, [arenaHeight, arenaWidth, sideLength])

    const xSpeed = useRef(xStarting)
    const ySpeed = useRef(yStarting)

    useEffect(() => {
        const deathClock = setInterval(() => {
            // console.log(xSpeed.current, ySpeed.current)

            if (deathCubePosition.left + xSpeed.current > (arenaWidth - sideLength) || deathCubePosition.left + xSpeed.current < 0) {
                // console.log("Reversing xSpeed!")
                xSpeed.current = xSpeed.current * -1
            } else {
                // console.log("Going ", xSpeed.current, " units in X");
                setDeathCubePosition(prev => ({ ...prev, left: (prev.left + xSpeed.current) }))
            }
            if (deathCubePosition.top + ySpeed.current > (arenaHeight - sideLength) || deathCubePosition.top + ySpeed.current < 0) {
                // console.log("Reversing ySpeed!")
                ySpeed.current = ySpeed.current * -1
            } else {
                // console.log("Going ", ySpeed.current, " units in Y");
                setDeathCubePosition(prev => ({ ...prev, top: (prev.top + ySpeed.current) }))
            }
            // console.log(xSpeed.current, ySpeed.current)
        }, 25)

        return function cleanup() {
            clearInterval(deathClock)
        }
    }, [arenaWidth, arenaHeight, deathCubePosition, setDeathCubePosition, sideLength])
    //^ not using a cleanup function caused setInterval to infinitely increment speed every time the component was re-rendering
    //likely too many setIntervals going on at once

    //player collision checker
    if ((yourX > deathCubePosition.left - playerWidth) && (yourX < deathCubePosition.left + sideLength)) {
        if ((yourY > deathCubePosition.top - playerHeight) && (yourY < deathCubePosition.top + sideLength)) {
            console.log('You are dead')
            touchDeathCube()
        }
    }
    return (
        <div
            style={{
                background: 'red', width: (sideLength.toString() + 'px'), height: (sideLength.toString() + 'px'), boxShadow: '0px 0px 20px #000000',
                position: 'absolute', left: (deathCubePosition.left.toString() + 'px'), top: (deathCubePosition.top.toString() + 'px')
            }}>
            <b>☠</b>
        </div>
    )
}
