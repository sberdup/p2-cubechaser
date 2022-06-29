import React from 'react'

export default function PowerCube({yourShape, cubePosition:{left, top}}) {
    return (
        <div
            style={{
                background:'gold', width: '30px', height: '30px',
                position: 'absolute', left: (left.toString() + 'px'), top: (top.toString() + 'px')
            }}>
            P
        </div>
    )
}
