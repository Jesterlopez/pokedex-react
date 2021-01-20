import React from 'react'
import Img from '../images/PokeGe.svg'

import './css/ButtonGenerate.css'

function ButtonGenerate(props){

    // / buttonSearch.addEventListener('focusout', (e) => {
        //     // return e.target.value
        //     console.log(e.target.value)
        //     location.reload()
        // })
        
    
    return(
        <div className="bar-menu-inferior">
                <button
                    onClick={props.onClick}
                    >
                    <img src={Img} alt="button-generate" /></button>
                <div 
                    className="input-search">
             <input 
                        id="button-search" 
                        type="text" 
                        className="form-control text-center" 
                        placeholder="150" 
                        autoComplete="off"
                        onBlur={props.onBlur}
                        />
                </div>
            </div>
    )
}
export default ButtonGenerate