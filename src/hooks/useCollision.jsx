import { useMemo } from "react"
import {playerHeight, playerWidth} from "../components/ShapeArena"

function useCollision(playerPosition, objectPosition, objectSideLength, collisionHandler) {
    if ((yourX > cubeX - playerWidth) && (yourX < cubeX + sideLength)) {
        if ((yourY > cubeY - playerHeight) && (yourY < cubeY + sideLength)) {
            spawnCube(1)
        }
    }
  return 
}

export default useCollision