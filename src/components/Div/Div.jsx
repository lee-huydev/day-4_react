import React from 'react'
import './style.css'
const Div = ({shape, ...style}) => {
  return (
    <div className={shape} style={{...style}}></div>
  )
}

export default Div;
