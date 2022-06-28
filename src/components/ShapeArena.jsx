import React, {useState} from 'react'
import PlayerShape from './PlayerShape'

export default function ShapeArena({data}) {
    const [yourShape, setYourShape] = useState({left:0, top:0})

    function yourMotion(direction) {
        console.log(direction)
        switch(direction){
            case 'ArrowLeft':
                if(yourShape.left - 10 < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({...prev, left:(prev.left - 10)}))
                }
                break
            case 'ArrowRight':
                if(yourShape.left + 10 > 1840) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({...prev, left:(prev.left + 10)}))
                }
                break
            case 'ArrowUp':
                if(yourShape.top - 10 < 0) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({...prev, top:(prev.top - 10)}))
                }
                break
            case 'ArrowDown':
                if(yourShape.top + 10 > 860) {
                    console.log("Can't go through the wall");
                } else {
                    setYourShape(prev => ({...prev, top:(prev.top + 10)}))
                }
                break
            default:
                console.log("What happened?")
        }
        console.log(yourShape)
    }

  return (
    <div style={{border:'10px solid red', position:'absolute', top:'10px', left:'10px', width:'1880px', height:'890px'}}>
        <PlayerShape xPos={yourShape.left} yPos={yourShape.top} yourMotion={yourMotion}/>
        <p>{data}</p>
    </div>
  )
}
