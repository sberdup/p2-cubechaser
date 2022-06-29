import React, {useEffect} from 'react'

export default function PowerCube({yourShape:{left:yourX, top:yourY}, cubePosition:{left:cubeX, top:cubeY}, spawnCube, sideLength, playerWidth, playerHeight}) {
    //use effect so we can choose what happens when the component renders, ONCE for now
    //setInterval to serve as a clock to check for collision with player
    //UPDATE: useEffect with player position as dependencies seems to work better than setInterval

    useEffect(() => {
            console.log('Your position: x:',yourX, 'y:', yourY, 'Cube position: x:', cubeX, 'y:', cubeY )
            if ((yourX > cubeX - playerWidth)  && (yourX < cubeX + sideLength)){
                if ((yourY > cubeY - playerHeight) && (yourY < cubeY + sideLength)){
                    spawnCube(1)
                }
            }
    }, [yourX, yourY, cubeX, cubeY, spawnCube, sideLength, playerWidth, playerHeight])

    return (
        <div
            style={{
                background:'gold', width: (sideLength.toString() + 'px'), height: (sideLength.toString() + 'px'),
                position: 'relative', left: (cubeX.toString() + 'px'), top: (cubeY.toString() + 'px')
            }}>
            P
        </div>
    )
}
