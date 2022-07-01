import React from 'react'
import useCollision from '../hooks/useCollision'

export default function PowerCube({ yourShape, cubePosition, spawnCube, sideLength}) {
    //UPDATE: useEffect with player position as dependencies seems to work better than setInterval
    //UPDATE2: useEffect does not appear to be necessary for this component to calculate collision when player position changes

    // useEffect(() => {
    //         calculateHit(yourX, yourY)
    // }, [yourX, yourY])

    // if ((yourX > cubeX - playerWidth) && (yourX < cubeX + sideLength)) {
    //     if ((yourY > cubeY - playerHeight) && (yourY < cubeY + sideLength)) {
    //         spawnCube(1)
    //     }
    // }

    // console.log('Your position: x:',yourX, 'y:', yourY, 'Cube position: x:', cubeX, 'y:', cubeY )
    const collisionState = useCollision(yourShape, cubePosition, sideLength)
    if (collisionState) {
        spawnCube(1)
    }

    const cubeX = cubePosition.left
    const cubeY = cubePosition.top

    return (
        <div
            style={{
                background: 'gold', width: (sideLength.toString() + 'px'), height: (sideLength.toString() + 'px'),
                position: 'absolute', left: (cubeX.toString() + 'px'), top: (cubeY.toString() + 'px')
            }}>
            P
        </div>
    )
}
