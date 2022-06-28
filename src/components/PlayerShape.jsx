import React from 'react'

export default function PlayerShape({ xPos, yPos }) {

  return (
    <div
      style={{
        border: '5px solid black', background: 'green', width: '30px', height: '20px',
        position: 'absolute', left: (xPos.toString() + 'px'), top: (yPos.toString() + 'px')
      }}>
      You
    </div>
  )
}
