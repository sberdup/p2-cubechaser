import React, { useEffect, useRef } from 'react'

export default function DeathCube({ yourShape: { left: yourX, top: yourY }, deathPosition: { left: cubeX, top: cubeY },
    sideLength, playerWidth, playerHeight, arenaHeight, arenaWidth, setDeathPosition }) {

    const xSpeed = useRef(true)

    useEffect(() => {
        const deathClock = setInterval(() => {
            console.log(xSpeed.current)
            if (cubeX + 1 > (arenaWidth - sideLength)) {
                xSpeed.current = false
            }
            if (cubeX - 1 < 0) {
                xSpeed.current = true
            }
            if (xSpeed.current) {
                console.log("Going right!");
                setDeathPosition(prev => ({ ...prev, left: (prev.left + 1) }))
            } else {
                console.log("Going left!")
                setDeathPosition(prev => ({ ...prev, left: (prev.left - 1) }))
            }
            console.log(cubeX, cubeY)
        }, 25)

        return function cleanup() {
            clearInterval(deathClock)
        }
    }, [arenaWidth, cubeX, cubeY, setDeathPosition, sideLength])

    if ((yourX > cubeX - playerWidth) && (yourX < cubeX + sideLength)) {
        if ((yourY > cubeY - playerHeight) && (yourY < cubeY + sideLength)) {
            console.log('You are dead')
        }
    }
    return (
        <div
            style={{
                background: 'red', width: (sideLength.toString() + 'px'), height: (sideLength.toString() + 'px'),
                position: 'absolute', left: (cubeX.toString() + 'px'), top: (cubeY.toString() + 'px')
            }}>
            D
        </div>
    )
}
