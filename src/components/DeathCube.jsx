import React, {useState} from 'react'

export default function DeathCube({ yourShape: { left: yourX, top: yourY }, sideLength, playerWidth, playerHeight, arenaHeight, arenaWidth }) {
    const [cubePosition, setCubePosition] = useState({ left: 600, top: 600 })
    const cubeX = cubePosition.left
    const cubeY = cubePosition.top

    let xSpeed = true
    setInterval(()=>{
        if (cubePosition.left + 1 > (arenaWidth - sideLength)) {
            xSpeed = false
        }
        if (cubePosition.left - 1 < 0) {
            xSpeed = true
        }
        if (xSpeed) {
            console.log("Going right!");
            setCubePosition(prev => ({ ...prev, left: (prev.left + 1) }))
        } else{
            console.log("Going left!")
            setCubePosition(prev => ({ ...prev, left: (prev.left - 1) }))
        }
        console.log(cubeX, cubeY)
    }, 1000)

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
