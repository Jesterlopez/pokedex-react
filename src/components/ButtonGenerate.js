import React from 'react'
import Img from '../images/PokeGe.svg'

import './css/ButtonGenerate.css'

function ButtonGenerate (props) {
  return (
    <div className="bar-menu-inferior">
      <button onClick={props.onClick}>
        <img src={Img} alt="button-generate" /></button>
    </div>
  )
}
export default ButtonGenerate
