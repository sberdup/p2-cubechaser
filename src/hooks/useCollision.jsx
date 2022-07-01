import { useState } from "react"
import { useMemo } from "react"
import {playerHeight, playerWidth} from "../components/ShapeArena"
//hook returns a stateful boolean that will reflect whether the given object and player object are intersecting

const collisionCalculation = useMemo(function({playerPosition:{ left: yourX, top: yourY }, objectPosition: { left: cubeX, top: cubeY }, objectSideLength}){
    if ((yourX > cubeX - playerWidth) && (yourX < cubeX + objectSideLength)) {
        if ((yourY > cubeY - playerHeight) && (yourY < cubeY + objectSideLength)) {
            return true
        }
    } 
    return false
}, [playerPosition, objectPosition])

function useCollision(playerPosition, objectPosition, objectSideLength) {
    const [collisionState, setCollisionState] = useState(false)
    setCollisionState(collisionCalculation(playerPosition, objectPosition, objectSideLength))
  return collisionState
}

export default useCollision