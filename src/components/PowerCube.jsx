import React, {useEffect} from 'react'

export default function PowerCube({yourShape:{left:yourX, top:yourY}, cubePosition:{left:cubeX, top:cubeY}, spawnCube}) {
    //use effect so we can choose what happens when the component renders, ONCE for now
    //setInterval to serve as a clock to check for collision with player
    //UPDATE: useEffect with player position as dependencies seems to work better than setInterval

    useEffect(() => {
            console.log('Your position: x:',yourX, 'y:', yourY, 'Cube position: x:', cubeX, 'y:', cubeY )
            if ((yourX > cubeX - 40)  && (yourX < cubeX + 30)){
                if ((yourY > cubeY - 30) && (yourY < cubeY + 30)){
                    spawnCube(1)
                }
            }
    }, [yourX, yourY, cubeX, cubeY, spawnCube])

    return (
        <div
            style={{
                background:'gold', width: '30px', height: '30px',
                position: 'absolute', left: (cubeX.toString() + 'px'), top: (cubeY.toString() + 'px')
            }}>
            P
        </div>
    )
}
