import React from 'react'
import './css/stat.css'

function Stat (props){
    return(
        <div className="pokemon-stat">
        <h5 className="pokemon-stat-unique">{props.nameStat}</h5>
        <div className="progress">
            <div className="progress-bar" style={{width: props.width +'%'}}>
                <div id="progress-bar-number">{props.valueStat}</div>
            </div>
        </div>
    </div>
    )
}

export default Stat