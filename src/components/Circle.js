import React from 'react'

function Circle({width, height, backgroundColor, zIndex, animation}) {

    let styles = {
        width: width,
        height: height,
        // backgroundColor: backgroundColor,
        zIndex: zIndex,
        animation: animation,
    }

  return (
    <div className="circle" style={styles}>
    </div>
  )
}

export default Circle