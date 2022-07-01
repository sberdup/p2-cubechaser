import { useState, useEffect } from "react"
import { playerHeight, playerWidth } from "../components/ShapeArena"
//hook returns a stateful boolean that will reflect whether the given object and player object are intersecting

function useCollision(playerPosition, objectPosition, objectSideLength) {

    const [collisionState, setCollisionState] = useState(false)

    const collisionMemo = useEffect(() => {
        const cubeX = objectPosition.left
        const cubeY = objectPosition.top
        const yourX = playerPosition.left
        const yourY = playerPosition.top
        if ((yourX > cubeX - playerWidth) && (yourX < cubeX + objectSideLength)) {
            if ((yourY > cubeY - playerHeight) && (yourY < cubeY + objectSideLength)) {
                return true
            }
        }
        return false
    }, [playerPosition, objectPosition, objectSideLength])
    setCollisionState(collisionMemo)
    return collisionState
}

export default useCollision