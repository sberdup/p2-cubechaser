import React from 'react'

export default function PowerCube({ yourShape: { left: yourX, top: yourY }, cubePosition: { left: cubeX, top: cubeY }, spawnCube, sideLength, playerWidth, playerHeight }) {
    //UPDATE: useEffect with player position as dependencies seems to work better than setInterval
    //UPDATE2: useEffect does not appear to be necessary for this component to calculate collision when player position changes

    // useEffect(() => {
    //         calculateHit(yourX, yourY)
    // }, [yourX, yourY])

    if ((yourX > cubeX - playerWidth) && (yourX < cubeX + sideLength)) {
        if ((yourY > cubeY - playerHeight) && (yourY < cubeY + sideLength)) {
            spawnCube(1)
        }
    }

    // console.log('Your position: x:',yourX, 'y:', yourY, 'Cube position: x:', cubeX, 'y:', cubeY )

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
