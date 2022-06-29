import React from 'react'

export default function PlayerShape({yourShape:{ left:xPos, top:yPos }}) {

  return (
    <div
    // motion is created by plugging in props for x-y position and changing absolute positioning
      style={{
        border: '5px solid black', background: 'green', width: '30px', height: '20px',
        position: 'absolute', left: (xPos.toString() + 'px'), top: (yPos.toString() + 'px')
      }}>
      You
    </div>
  )
}
