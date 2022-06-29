import React from 'react'

export default function PlayerShape({yourShape:{ left:xPos, top:yPos }, width, height}) {
  let newWidth = width - 10
  let newHeight = height -10

  return (
    <div
    // motion is created by plugging in props for x-y position and changing absolute positioning
      style={{
        border: '5px solid black', background: 'green', width: (newWidth.toString() + 'px'), height: (newHeight.toString() + 'px'),
        position: 'relative', left: (xPos.toString() + 'px'), top: (yPos.toString() + 'px')
      }}>
      You
    </div>
  )
}
